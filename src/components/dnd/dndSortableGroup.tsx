"use client";
import { Collision, useDndMonitor } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { DndSortableWrapper } from "./dndSortable";
import { SortableItem } from "~/types/dnd";
import { useMemo, useState } from "react";
import { DndPresentational } from "./dndPresentational";
import { LayoutGroup } from "framer-motion";
import { reorderItems, useDndIntersectionMonitor } from "~/utils/dnd";

type Props = {
  items: SortableItem[];
  opacityOnDrag?: number;
  receiveNewList: (newList: SortableItem[]) => void;
};

export const DndSortableGroup = (props: Props) => {
  const { items, opacityOnDrag, receiveNewList } = props;
  const [activeID, setActiveId] = useState<string | null>(null);
  const activeItem = items.find((item) => item.params.id === activeID);
  const itemIDs = useMemo(() => items.map((item) => item.params.id), [items]);

  useDndIntersectionMonitor({
    holdOverTime: 750,
    holdOverThreshold: 0.2,

    onDragStart({ active }) {
      setActiveId(active.id as string);
    },

    onDragMove({ active, over }) {
      receiveNewList(reorderItems(items, active, over));
    },

    onDragHoldover({ active, over }) {
      console.log("Holdover", active, over);
    },

    onDragEnd() {
      setActiveId(null);
    },
  });

  return (
    <LayoutGroup>
      {JSON.stringify(itemIDs)}
      <SortableContext items={itemIDs}>
        {items.map((item) => (
          <>
            <DndSortableWrapper
              params={item.params}
              key={item.params.id}
              opacityOnDrag={opacityOnDrag}
            >
              {item.element}
            </DndSortableWrapper>
          </>
        ))}
      </SortableContext>
      <DndPresentational>{activeItem?.element}</DndPresentational>
    </LayoutGroup>
  );
};
