"use client";
import { UseSortableArguments, useSortable } from "@dnd-kit/sortable";
import { SortableCTX } from "./dndContext";
import { PropsWithChildren } from "react";

type Props = {
  params: UseSortableArguments;
};

export const DndSortableWrapper = ({
  params,
  children,
}: PropsWithChildren<Props>) => {
  const sortableReturn = useSortable({ ...params });

  return (
    <SortableCTX.Provider value={{ ...sortableReturn }} key={params.id}>
      {children}
    </SortableCTX.Provider>
  );
};
