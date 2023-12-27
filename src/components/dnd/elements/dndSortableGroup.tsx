"use client";
import { useDndMonitor } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { DndSortableWrapper } from "../primatives/dndSortable";
import { SortableItem } from "~/types/dnd";
import { useState } from "react";
import { DndPresentational } from "../primatives/dndPresentational";

type Props = {
  items: SortableItem[];
  opacityOnDrag?: number;
  setItems: React.Dispatch<React.SetStateAction<Props["items"]>>;
};

export const DndSortableGroup = ({ items, setItems, opacityOnDrag }: Props) => {
  const [activeID, setActiveID] = useState<string | null>(null);
  const activeItem = items.find((item) => item.params.id === activeID);
  const itemIDs = items.map((item) => item.params.id);

  useDndMonitor({
    onDragStart({ active }) {
      setActiveID(active.id as string);
    },

    onDragMove({ active, over }) {
      const itemIDs = items.map((item) => item.params.id);

      if (itemIDs.includes(over?.id as string)) {
        const activeId = itemIDs.indexOf(active.id as string);
        const overIdx = items.findIndex((item) => item.params.id === over?.id);
        const newSets = arrayMove(items, activeId, overIdx);
        setItems(newSets);
      }
    },
  });

  return (
    <>
      <SortableContext items={itemIDs}>
        {items.map((item) => (
          <DndSortableWrapper
            params={item.params}
            key={item.params.id}
            opacityOnDrag={opacityOnDrag}
          >
            {item.element}
          </DndSortableWrapper>
        ))}
      </SortableContext>

      <DndPresentational>{activeItem?.element}</DndPresentational>
    </>
  );
};
