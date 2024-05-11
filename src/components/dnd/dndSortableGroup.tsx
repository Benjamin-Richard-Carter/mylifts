"use client";
import { SortableContext } from "@dnd-kit/sortable";
import { DndSortableWrapper } from "./dndSortable";
import { SortableItem } from "~/types/dnd";
import { useMemo, useState } from "react";
import { DndPresentational } from "./dndPresentational";
import { reorderItems, useDndIntersectionMonitor } from "~/utils/dnd";

type Props = {
  items: SortableItem[];
  receiveNewList: (newList: SortableItem[]) => void;
  render: any;
};

export const DndSortableGroup = (props: Props) => {
  const { items, receiveNewList } = props;
  const [activeID, setActiveId] = useState<string | null>(null);
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
    <>
      <SortableContext items={itemIDs}>
        {items.map((item) => (
          <DndSortableWrapper
            params={item.params}
            key={item.params.id}
            render={props.render}
          />
        ))}
      </SortableContext>

      <DndPresentational>{props.render({ id: activeID })}</DndPresentational>
    </>
  );
};
