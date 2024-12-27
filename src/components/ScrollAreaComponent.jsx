import * as React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export function ScrollAreaComponent({ children }) {
  return (
    <ScrollArea className="w-full overflow-x-auto overflow-y-hidden rounded-md h-full">
      <div className="flex w-max space-x-4 py-2">{children}</div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
