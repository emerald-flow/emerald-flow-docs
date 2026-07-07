"use client";
import { Info, X } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "~/lib/utils";
import { queryOptions, useQuery, useQueryClient } from "@tanstack/react-query";

const infoQuery = queryOptions({
  queryKey: ["info"],
  initialData: true,
});

export function GalleryInfo({
  className,
  description = "",
}: {
  className: string;
  description?: string;
}) {
  const { data: info } = useQuery(infoQuery);
  const queryClient = useQueryClient();
  const toggleInfo = () =>
    queryClient.setQueryData(infoQuery.queryKey, (prev) => !prev);
  return (
    <div
      className={cn(
        "absolute flex overflow-hidden rounded-md opacity-80",
        className,
      )}
    >
      <div
        className={cn(
          "bg-secondary text-secondary-foreground overflow-hidden px-2 py-1 transition-all",
          !info && "hidden px-0",
        )}
      >
        {description}
      </div>
      <Button
        variant="secondary"
        className="rounded-none border-none"
        onClick={() => toggleInfo()}
      >
        <Info className={cn("scale-0 transition-all", !info && "scale-100")} />
        <X
          className={cn(
            "absolute h-[1.2rem] w-[1.2rem] scale-0 transition-all",
            info && "scale-100",
          )}
        />
      </Button>
    </div>
  );
}
