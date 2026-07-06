"use client";

import { useState, type PropsWithChildren } from "react";
import {
  mutationOptions,
  queryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { patchRom } from "~/lib/rom-patcher";

import { createContext, use } from "react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { CircleCheck, CircleDashed, CircleX, RotateCcw } from "lucide-react";
import { cn } from "~/lib/utils";
import { Spinner } from "./ui/spinner";
import { FileUpload, FileUploadTrigger } from "./ui/file-upload";
import { Progress } from "./ui/progress";
import { Field, FieldLabel } from "./ui/field";

import throttle from "lodash.throttle";

type Progress = { received: number; total: number } | null;

type Status = (
  | {
      status: "success" | "waiting" | "idle" | "pending";
      message: null;
    }
  | {
      status: "error";
      message: string;
    }
) & {
  start: number;
  end: number;
};

type StatusType = Status["status"];

const EXPECTED_ROM_SHA256 =
  "a9dec84dfe7f62ab2220bafaef7479da0929d066ece16a6885f6226db19085af";

const PatcherQueryKey = ["patcher"] as const;

const ROMQueryOptions = queryOptions<File | null>({
  queryKey: [...PatcherQueryKey, "rom"],
  initialData: null,
});

const patchQueryOptions = queryOptions<File | null>({
  queryKey: [...PatcherQueryKey, "patch"],
  initialData: null,
});

const patchedROMQueryOptions = queryOptions<File | null>({
  queryKey: [...PatcherQueryKey, "patchedROM"],
  initialData: null,
});

const selectROMQueryOptions = queryOptions<Status>({
  queryKey: [...PatcherQueryKey, "selectROM"],
  initialData: {
    status: "waiting",
    message: null,
    start: 0,
    end: 0,
  },
});

const selectROMMutationOptions = mutationOptions({
  mutationKey: ["selectROM"],
  mutationFn: async (rom: File) => {
    if (!rom) throw new Error("File missing");
    return rom;
  },
  onMutate: (_, ctx) =>
    ctx.client.setQueryData(selectROMQueryOptions.queryKey, {
      message: null,
      status: "pending" as const,
      start: Date.now(),
      end: 0,
    }),
  onError: (error, _, __, ctx) =>
    ctx.client.setQueryData(selectROMQueryOptions.queryKey, {
      message: error.message,
      status: "error" as const,
      start: 0,
      end: 0,
    }),
  onSuccess: (_, __, ___, ctx) =>
    ctx.client.setQueryData(selectROMQueryOptions.queryKey, (prev) => ({
      ...prev!,
      message: null,
      status: "success" as const,
      end: Date.now(),
    })),
});

const verifyROMQueryOptions = queryOptions<Status>({
  queryKey: [...PatcherQueryKey, "verifyROM"],
  initialData: {
    status: "idle",
    message: null,
    start: 0,
    end: 0,
  },
});

const verifyROMMutationOptions = mutationOptions({
  mutationKey: ["verifyROM"],
  mutationFn: async (rom: File) => {
    const arrayBuffer = await rom.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest("SHA-256", arrayBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
    if (hashHex !== EXPECTED_ROM_SHA256) throw new Error("Invalid Game file");
    return rom;
  },
  onMutate: (_, ctx) =>
    ctx.client.setQueryData(verifyROMQueryOptions.queryKey, {
      message: null,
      status: "pending" as const,
      start: Date.now(),
      end: 0,
    }),
  onError: (error, _, __, ctx) =>
    ctx.client.setQueryData(verifyROMQueryOptions.queryKey, {
      message: error.message,
      status: "error" as const,
      start: 0,
      end: 0,
    }),
  onSuccess: (rom, __, ___, ctx) => {
    ctx.client.setQueryData(ROMQueryOptions.queryKey, rom);
    ctx.client.setQueryData(verifyROMQueryOptions.queryKey, (prev) => ({
      ...prev!,
      message: null,
      status: "success" as const,
      end: Date.now(),
    }));
  },
});

const downloadPatchQueryOptions = queryOptions<Status>({
  queryKey: [...PatcherQueryKey, "downloadPatch"],
  initialData: {
    status: "idle",
    message: null,
    start: 0,
    end: 0,
  },
});

const downloadPatchMutationOptions = mutationOptions({
  mutationKey: ["downloadPatch"],
  mutationFn: async (
    setProgress: React.Dispatch<React.SetStateAction<number | null>>,
  ) => {
    const response = await fetch(
      "https://cdn.jsdelivr.net/gh/officer-kd6-3dot7/X/pokeemerald.bps",
      {
        cache: "no-store",
      },
    );
    if (!response.ok) throw new Error("Failed to download patch.");
    if (!response.body) throw new Error("Streaming unsupported.");
    const reader = response.body.getReader();
    const chunks: BlobPart[] = [];
    let received = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
      received += value.byteLength;
      setProgress(received);
    }
    const patch = new File(chunks, "pokeemerald.bps", {
      type: "application/octet-stream",
    });
    return patch;
  },
  onMutate: (_, ctx) =>
    ctx.client.setQueryData(downloadPatchQueryOptions.queryKey, {
      message: null,
      status: "pending" as const,
      start: Date.now(),
      end: 0,
    }),
  onError: (error, _, __, ctx) =>
    ctx.client.setQueryData(downloadPatchQueryOptions.queryKey, {
      message: error.message,
      status: "error" as const,
      start: 0,
      end: 0,
    }),
  onSuccess: (patch, __, ___, ctx) => {
    ctx.client.setQueryData(patchQueryOptions.queryKey, patch);
    ctx.client.setQueryData(downloadPatchQueryOptions.queryKey, (prev) => ({
      ...prev!,
      message: null,
      status: "success" as const,
      end: Date.now(),
    }));
  },
});

const applyPatchQueryOptions = queryOptions<Status>({
  queryKey: [...PatcherQueryKey, "applyPatch"],
  initialData: {
    status: "idle",
    message: null,
    start: 0,
    end: 0,
  },
});

const applyPatchMutationOptions = mutationOptions({
  mutationKey: ["applyPatch"],
  mutationFn: async ({ rom, patch }: { rom: File; patch: File }) => {
    const patchedROM = await patchRom(rom, patch);
    return patchedROM;
  },
  onMutate: (_, ctx) =>
    ctx.client.setQueryData(applyPatchQueryOptions.queryKey, {
      message: null,
      status: "pending" as const,
      start: Date.now(),
      end: 0,
    }),
  onError: (error, _, __, ctx) =>
    ctx.client.setQueryData(applyPatchQueryOptions.queryKey, {
      message: error.message,
      status: "error" as const,
      start: 0,
      end: 0,
    }),
  onSuccess: (patchedROM, __, ___, ctx) => {
    ctx.client.setQueryData(patchedROMQueryOptions.queryKey, patchedROM);
    ctx.client.setQueryData(applyPatchQueryOptions.queryKey, (prev) => ({
      ...prev!,
      message: null,
      status: "success" as const,
      end: Date.now(),
    }));
  },
});

const usePatcherContext = () => {
  const queryClient = useQueryClient();

  const [progress, setProgress] = useState<number | null>(null);

  const rom = useQuery(ROMQueryOptions);
  const patch = useQuery(patchQueryOptions);
  const patchedROM = useQuery(patchedROMQueryOptions);

  const selectROMQuery = useQuery(selectROMQueryOptions);
  const verifyROMQuery = useQuery(verifyROMQueryOptions);
  const downloadPatchQuery = useQuery(downloadPatchQueryOptions);
  const applyPatchQuery = useQuery(applyPatchQueryOptions);

  const selectROMMutation = useMutation(selectROMMutationOptions);
  const verifyROMMutation = useMutation(verifyROMMutationOptions);
  const downloadPatchMutation = useMutation(downloadPatchMutationOptions);
  const applyPatchMutation = useMutation(applyPatchMutationOptions);

  const handleSetProgress = throttle(setProgress, 400, {
    leading: true,
    trailing: true,
  });

  const patchMutation = useMutation({
    mutationKey: ["patch"],
    mutationFn: async (romInput: File) => {
      let romFile = rom.data;
      if (!romFile) {
        romFile = await selectROMMutation.mutateAsync(romInput);
        await verifyROMMutation.mutateAsync(romFile);
      }
      const patchFile =
        patch.data ??
        (await downloadPatchMutation.mutateAsync(handleSetProgress));
      const patchedRomFile = await applyPatchMutation.mutateAsync({
        rom: romFile,
        patch: patchFile,
      });

      return patchedRomFile;
    },
    onSuccess: (patchedRomFile, _, __, ctx) =>
      ctx.client.setQueryData(patchedROMQueryOptions.queryKey, patchedRomFile),
    onSettled: () => setProgress(null),
  });

  const reset = async (stage: "select" | "verify" | "download" | "apply") => {
    switch (stage) {
      case "apply": {
        await Promise.allSettled([
          queryClient.resetQueries({
            queryKey: applyPatchQueryOptions.queryKey,
            exact: true,
          }),
          queryClient.resetQueries({
            queryKey: patchedROMQueryOptions.queryKey,
            exact: true,
          }),
        ]);
        return;
      }
      case "download": {
        await Promise.allSettled([
          queryClient.resetQueries({
            queryKey: downloadPatchQueryOptions.queryKey,
            exact: true,
          }),
          queryClient.resetQueries({
            queryKey: patchQueryOptions.queryKey,
            exact: true,
          }),
        ]);
        return;
      }
      case "verify":
      case "select": {
        await Promise.allSettled([
          queryClient.resetQueries({
            queryKey: verifyROMQueryOptions.queryKey,
            exact: true,
          }),
          queryClient.resetQueries({
            queryKey: patchQueryOptions.queryKey,
            exact: true,
          }),
          queryClient.resetQueries({
            queryKey: selectROMQueryOptions.queryKey,
            exact: true,
          }),
        ]);
        return;
      }
      default:
        stage satisfies never;
    }
  };

  return {
    rom,
    reset,
    patchedROM,
    progress,
    patchMutation,
    selectROMQuery,
    verifyROMQuery,
    downloadPatchQuery,
    applyPatchQuery,
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
  const patcherValue = usePatcherContext();
  return (
    <PatcherContext value={patcherValue}>
      <Patcher />
    </PatcherContext>
  );
}

function Patcher() {
  const { patchMutation, rom } = usePatcher();
  return (
    <div className="w-full">
      <FileUpload
        value={rom.data ? [rom.data] : []}
        onFileAccept={patchMutation.mutate}
        maxFiles={1}
        accept=".gba"
        required
      >
        <div className="flex w-full flex-col gap-2">
          <SelectRom />
          <VerifyRom />
          <DownloadPatch />
          <ApplyPatch />
          <Done />
        </div>
      </FileUpload>
    </div>
  );
}

function SelectRom() {
  const {
    reset,
    selectROMQuery: { data },
  } = usePatcher();
  return (
    <Step title="Select ROM" data={data}>
      <StepAction data={data} onRetry={() => reset("select")}>
        <FileUploadTrigger asChild>
          <Button variant="outline" size="sm">
            Browse files
          </Button>
        </FileUploadTrigger>
      </StepAction>
    </Step>
  );
}

function VerifyRom() {
  const {
    reset,
    verifyROMQuery: { data },
  } = usePatcher();
  return (
    <Step title="Verify ROM" data={data}>
      <StepAction data={data} onRetry={() => reset("verify")} />
    </Step>
  );
}
const formatMB = (bytes: number) => `${(bytes / (1000 * 1000)).toFixed(2)}MB`;

function DownloadPatch() {
  const {
    progress,
    reset,
    downloadPatchQuery: { data },
  } = usePatcher();
  return (
    <Step title="Download Patch" data={data}>
      <StepAction data={data} onRetry={() => reset("download")}>
        {progress && (
          <Field className="w-full max-w-sm">
            <FieldLabel htmlFor="progress-upload">
              <span className="ml-auto text-xs tabular-nums">
                {formatMB(progress)} / {formatMB(9245050)}
              </span>
            </FieldLabel>
            <Progress id="progress-upload" value={(progress / 9245050) * 100} />
          </Field>
        )}
      </StepAction>
    </Step>
  );
}

function ApplyPatch() {
  const {
    reset,
    applyPatchQuery: { data },
  } = usePatcher();
  return (
    <Step title="Apply Patch" data={data}>
      <StepAction data={data} onRetry={() => reset("apply")} />
    </Step>
  );
}

function Done() {
  const {
    patchedROM,
    applyPatchQuery: { data },
  } = usePatcher();
  return (
    <Step title="Done!" data={data}>
      <StepAction
        data={{
          status: data.status === "success" ? "waiting" : "idle",
          end: data.end,
          start: data.start,
          message: null,
        }}
        onRetry={() => void 0}
      >
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            const url = URL.createObjectURL(patchedROM.data!);
            const a = document.createElement("a");
            a.href = url;
            a.download = patchedROM.data!.name;
            a.click();
            URL.revokeObjectURL(url);
          }}
        >
          Download!
        </Button>
      </StepAction>
    </Step>
  );
}

function StepAction({
  data: { status, start, end },
  onRetry,
  children,
}: PropsWithChildren<{
  data: Status;
  onRetry: () => void;
}>) {
  const elapsed = (end - start) / 1000;
  switch (status) {
    case "error":
      return (
        <Button variant="outline" size="sm" onClick={onRetry}>
          <RotateCcw />
          Retry
        </Button>
      );
    case "success":
      return (
        <div className="opacity-50">
          {elapsed < 0.01 ? "<0.01s" : `${elapsed.toFixed(2)}s`}
        </div>
      );
    case "waiting":
      return <>{children}</>;
    case "idle":
      return <></>;
    case "pending":
      return <>{children}</>;
    default:
      status satisfies never;
  }
}

function Step({
  title,
  data,
  children,
}: PropsWithChildren<{
  title: string;
  data: Status;
}>) {
  return (
    <Card
      className={cn(
        "w-full py-4 transition-all",
        data.status === "idle" && "opacity-50",
      )}
    >
      <CardHeader className="w-full px-4">
        <CardTitle className="flex flex-row items-center gap-2">
          <StepStatus status={data.status} />
          <div className="flex flex-col gap-1">
            <span>{title}</span>
            <span className="text-red-500 opacity-50">
              {data.message && `(${data.message})`}
            </span>
          </div>

          <div className="ml-auto">{children}</div>
        </CardTitle>
      </CardHeader>
    </Card>
  );
}

function StepStatus(props: { status: StatusType }) {
  switch (props.status) {
    case "error":
      return <CircleX className="size-5 text-red-500" />;
    case "success":
      return <CircleCheck className="size-5 text-green-500" />;
    case "pending":
      return <Spinner className="size-5" />;
    case "waiting":
    case "idle":
      return <CircleDashed className="size-5" />;
    default:
      props.status satisfies never;
  }
}
