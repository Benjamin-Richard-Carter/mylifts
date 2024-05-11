"use client";
import { UseSortableArguments, useSortable } from "@dnd-kit/sortable";
import { SortableCTX } from "./dndContext";

type Props = {
  params: UseSortableArguments;
  render: any;
};

export const DndSortableWrapper = ({ params, render }: Props) => {
  const sortableReturn = useSortable({ ...params });

  return (
    <SortableCTX.Provider value={{ ...sortableReturn }}>
      {render({ id: params.id })}
    </SortableCTX.Provider>
  );
};
