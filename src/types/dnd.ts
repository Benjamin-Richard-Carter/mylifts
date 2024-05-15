import { UseSortableArguments, useSortable } from "@dnd-kit/sortable";
import {
  UseDraggableArguments,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core";

export type useDroppableReturn = ReturnType<typeof useDroppable>;
export type UseDraggableReturn = ReturnType<typeof useDraggable>;
export type UseSortableReturn = ReturnType<typeof useSortable>;

export type DraggableItem = {
  params: UseDraggableArguments;
};

export type SortableItem = {
  params: UseSortableArguments;
};
