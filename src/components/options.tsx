import Image from "next/image";
import type { ComponentProps, PropsWithChildren } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Ban } from "lucide-react";
import type { features } from "~/lib/feature-list";
import { DefaultPill } from "./pills";
import { cn } from "~/lib/utils";

export const Option = ({
  alt,
  src,
  option,
  defaultOption,
  className,
}: Pick<ComponentProps<typeof Image>, "src" | "alt" | "className"> & {
  option: (typeof features)[keyof typeof features]["options"][number];
  defaultOption: (typeof features)[keyof typeof features]["defaultOption"];
}) => {
  const isDefault = option.title === defaultOption;
  return (
    <TableRow className="hover:bg-background pointer-events-none">
      <TableCell className="border-r whitespace-normal">
        <div className="flex w-full flex-col gap-2 text-sm [&_strong]:text-lg">
          <p className="flex flex-row items-center gap-2">
            <strong>{option.title}</strong> {isDefault && <DefaultPill />}
          </p>
          {option.description}
        </div>
      </TableCell>
      <TableCell>
        <div className="bg-background hover:bg-muted hover:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 pointer-events-auto flex cursor-pointer flex-col items-center gap-2 rounded-md border p-4 text-center text-wrap">
          <div className="relative flex items-center justify-center grayscale">
            <Image
              src={src}
              alt={alt}
              unoptimized
              loading="lazy"
              width={48}
              height={48}
              className={cn(className)}
            />
            {isDefault && (
              <Ban className="absolute scale-250 opacity-50" strokeWidth={1} />
            )}
          </div>
          <>{!isDefault ? "Coming soon!" : "No demo"}</>
        </div>
      </TableCell>
    </TableRow>
  );
};

export const Options = (props: PropsWithChildren) => {
  return (
    <Table className="min-w-77 table-fixed">
      <TableHeader>
        <TableRow className="pointer-events-none">
          <TableHead className="w-[60%] border-r text-2xl font-semibold tracking-tight">
            Options
          </TableHead>
          <TableHead className="w-[40%] text-center">Gameplay Demo</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>{props.children}</TableBody>
    </Table>
  );
};
Options.Option = Option;
