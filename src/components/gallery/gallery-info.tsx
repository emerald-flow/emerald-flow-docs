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
        "absolute ml-1 flex overflow-hidden rounded-md opacity-80",
        className,
      )}
    >
      <div
        className={cn(
          "bg-secondary text-secondary-foreground flex items-center py-1.5 pr-2 pl-4 transition-all",
          !info && "hidden px-0",
        )}
      >
        {description}
      </div>
      <Button
        aria-haspopup
        variant="secondary"
        className={cn("btn-static rounded-none border-none", info && "h-auto")}
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
