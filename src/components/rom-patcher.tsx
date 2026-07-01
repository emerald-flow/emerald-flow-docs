/* eslint-disable @typescript-eslint/no-unsafe-call */
"use client";

import { useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
} from "@tanstack/react-query";

import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { patchRom } from "~/lib/rom-patcher";

import { Upload, X } from "lucide-react";
import * as React from "react";
import { toast } from "sonner";
import {
  FileUpload,
  FileUploadDropzone,
  FileUploadItem,
  FileUploadItemDelete,
  FileUploadItemMetadata,
  FileUploadItemPreview,
  FileUploadList,
  FileUploadTrigger,
} from "~/components/ui/file-upload";

const queryClient = new QueryClient();

export function RomPatcher() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const [rom, setRom] = useState<File | null>(null);
  const [patch, setPatch] = useState<File | null>(null);

  const mutation = useMutation({
    mutationFn: async () => {
      if (!rom) throw new Error("Please select a ROM.");
      if (!patch) throw new Error("Please select a patch.");

      return patchRom(rom, patch);
    },
    throwOnError: true,
  });

  const [files, setFiles] = React.useState<File[]>([]);

  const onFileValidate = React.useCallback(
    (file: File): string | null => {
      // Validate max files
      if (files.length >= 2) {
        return "You can only upload up to 2 files";
      }

      // Validate file type (only images)
      if (!file.type.startsWith("image/")) {
        return "Only image files are allowed";
      }

      // Validate file size (max 2MB)
      const MAX_SIZE = 2 * 1024 * 1024; // 2MB
      if (file.size > MAX_SIZE) {
        return `File size must be less than ${MAX_SIZE / (1024 * 1024)}MB`;
      }

      return null;
    },
    [files],
  );

  const onFileReject = React.useCallback((file: File, message: string) => {
    toast(message, {
      description: `"${file.name.length > 20 ? `${file.name.slice(0, 20)}...` : file.name}" has been rejected`,
    });
  }, []);

  return (
    <>
      <div className="max-w-md space-y-4">
        <div>
          <label>ROM</label>
          <Input
            type="file"
            accept=".gba,.gbc,.gb,.nds,.zip"
            onChange={(e) => setRom(e.target.files?.[0] ?? null)}
          />
        </div>

        <div>
          <label>Patch</label>
          <Input
            type="file"
            accept=".bps,.ips,.ups,.aps,.ppf,.rup,.xdelta"
            onChange={(e) => setPatch(e.target.files?.[0] ?? null)}
          />
        </div>

        <Button disabled={mutation.isPending} onClick={() => mutation.mutate()}>
          {mutation.isPending ? "Patching..." : "Patch ROM"}
        </Button>

        {mutation.isError && (
          <p className="text-red-500">{mutation.error.message}</p>
        )}

        {mutation.isSuccess && (
          <div className="space-y-2">
            <p>✅ Patch applied successfully!</p>

            <Button
              onClick={() => {
                const file = mutation.data;
                const url = URL.createObjectURL(file);

                const a = document.createElement("a");
                a.href = url;
                a.download = file.name;
                a.click();

                URL.revokeObjectURL(url);
              }}
            >
              Download
            </Button>
          </div>
        )}
      </div>
      <FileUpload
        value={files}
        onValueChange={setFiles}
        onFileValidate={onFileValidate}
        onFileReject={onFileReject}
        accept="image/*"
        maxFiles={2}
        className="w-full max-w-md"
        multiple
      >
        <FileUploadDropzone>
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center justify-center rounded-full border p-2.5">
              <Upload className="text-muted-foreground size-6" />
            </div>
            <p className="text-sm font-medium">Drag & drop files here</p>
            <p className="text-muted-foreground text-xs">
              Or click to browse (max 2 files)
            </p>
          </div>
          <FileUploadTrigger asChild>
            <Button variant="outline" size="sm" className="mt-2 w-fit">
              Browse files
            </Button>
          </FileUploadTrigger>
        </FileUploadDropzone>
        <FileUploadList>
          {files.map((file) => (
            <FileUploadItem key={file.name} value={file}>
              <FileUploadItemPreview />
              <FileUploadItemMetadata />
              <FileUploadItemDelete asChild>
                <Button variant="ghost" size="icon" className="size-7">
                  <X />
                </Button>
              </FileUploadItemDelete>
            </FileUploadItem>
          ))}
        </FileUploadList>
      </FileUpload>
    </>
  );
}
