"use client";

import { useState } from "react";
import {
  mutationOptions,
  queryOptions,
  useMutation,
  useQuery,
} from "@tanstack/react-query";

import { Input } from "~/components/ui/input";
import { patchRom } from "~/lib/rom-patcher";

import { createContext, use } from "react";
import { Button } from "./ui/button";

const EXPECTED_ROM_SHA256 =
  "a9dec84dfe7f62ab2220bafaef7479da0929d066ece16a6885f6226db19085af";

type UploadInput = FileList | null;

type Progress = { received: number; total: number } | null;

const ROMQueryOptions = queryOptions<File | null>({
  queryKey: ["rom"],
});

const patchQueryOptions = queryOptions<File | null>({
  queryKey: ["patch"],
});

const patchedROMQueryOptions = queryOptions<File | null>({
  queryKey: ["patchedROM"],
});

const uploadROMMutationOptions = mutationOptions({
  mutationKey: ["uploadROM"],
  mutationFn: async (roms: UploadInput) => {
    const rom = roms?.[0];
    if (!rom) throw new Error("File missing");
    return rom;
  },
});

const validateROMMutationOptions = mutationOptions({
  mutationKey: ["validateROM"],
  mutationFn: async (rom: File, ctx) => {
    const arrayBuffer = await rom.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest("SHA-256", arrayBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
    if (hashHex !== EXPECTED_ROM_SHA256) throw new Error("Invalid ROM Hash");
    ctx.client.setQueryData(ROMQueryOptions.queryKey, () => rom);
  },
});

const downloadPatchMutationOptions = mutationOptions({
  mutationKey: ["downloadPatch"],
  mutationFn: async (
    setProgress: React.Dispatch<React.SetStateAction<Progress>>,
    ctx,
  ) => {
    const response = await fetch(
      "https://cdn.jsdelivr.net/gh/officer-kd6-3dot7/X/pokeemerald.ips",
      {
        cache: "no-store",
      },
    );
    if (!response.ok) throw new Error("Failed to download patch.");
    if (!response.body) throw new Error("Streaming unsupported.");
    const total = Number(response.headers.get("Content-Length") ?? 0);
    const reader = response.body.getReader();
    const chunks: BlobPart[] = [];
    let received = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
      received += value.byteLength;
      setProgress({
        received,
        total,
      });
    }
    const patch = new File(chunks, "pokeemerald.ips", {
      type: "application/octet-stream",
    });
    ctx.client.setQueryData(patchQueryOptions.queryKey, () => patch);
    return patch;
  },
});

const applyPatchMutationOptions = mutationOptions({
  mutationKey: ["applyPatch"],
  mutationFn: async ({ rom, patch }: { rom: File; patch: File }) => {
    return await patchRom(rom, patch);
  },
});

const usePatcherContext = () => {
  const [progress, setProgress] = useState<Progress>(null);
  const rom = useQuery(ROMQueryOptions);
  const patch = useQuery(patchQueryOptions);
  const patchedROM = useQuery(patchedROMQueryOptions);
  const uploadROM = useMutation(uploadROMMutationOptions);
  const validateROM = useMutation(validateROMMutationOptions);
  const downloadPatch = useMutation(downloadPatchMutationOptions);
  const applyPatch = useMutation(applyPatchMutationOptions);
  const patchMutation = useMutation({
    mutationKey: ["patch"],
    mutationFn: async (roms: UploadInput, ctx) => {
      let romFile = rom.data;
      if (!romFile) {
        romFile = await uploadROM.mutateAsync(roms);
        await validateROM.mutateAsync(romFile);
      }
      const patchFile =
        patch.data ?? (await downloadPatch.mutateAsync(setProgress));
      const patchedRomFile = await applyPatch.mutateAsync({
        rom: romFile,
        patch: patchFile,
      });
      ctx.client.setQueryData(
        patchedROMQueryOptions.queryKey,
        () => patchedRomFile,
      );
      return patchedRomFile;
    },
    onMutate: () => setProgress(null),
    onSettled: () => setProgress(null),
  });
  return {
    rom,
    patch,
    patchedROM,
    progress,
    uploadROM,
    validateROM,
    downloadPatch,
    applyPatch,
    patchMutation,
  };
};

const PatcherContext = createContext<
  ReturnType<typeof usePatcherContext> | undefined
>(undefined);

const usePatcher = () => {
  const context = use(PatcherContext);
  if (!context) throw new Error("Missing PatcherProvider");
  return context;
};

export function RomPatcher() {
  return (
    <PatcherContext value={usePatcherContext()}>
      <Example />
    </PatcherContext>
  );
}

function Example() {
  const { rom, patchedROM, patchMutation } = usePatcher();
  return (
    <>
      <div className="max-w-md space-y-4">
        <div>
          <label>ROM</label>
          <Input
            type="file"
            accept=".gba"
            disabled={
              Boolean(rom.data) ||
              Boolean(patchedROM.data) ||
              patchMutation.isPending ||
              patchMutation.isSuccess
            }
            onChange={(e) => patchMutation.mutate(e.target.files)}
          />
        </div>

        {!Boolean(patchedROM.data) && patchMutation.isError && (
          <p className="text-red-500">{patchMutation.error.message}</p>
        )}

        <Button
          disabled={!Boolean(patchedROM.data)}
          onClick={() => {
            const url = URL.createObjectURL(patchedROM.data!);
            const a = document.createElement("a");
            a.href = url;
            a.download = patchedROM.data!.name;
            a.click();
            URL.revokeObjectURL(url);
          }}
        >
          Download
        </Button>
      </div>
    </>
  );
}
