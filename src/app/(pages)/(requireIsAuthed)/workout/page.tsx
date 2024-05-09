"use client";
import { useState } from "react";
import { DndSortableGroup } from "~/components/dnd/dndSortableGroup";
import { SortableItem } from "~/types/dnd";
import { appendLexoRank } from "~/utils/lexorank";
import { motion } from "framer-motion";

type Props = {
  searchParams: { id: string };
};

export default function HomePage({ searchParams }: Props) {
  const [list, setList] = useState<SortableItem[]>([]);
  const itemIDs = list.map((item) => item.params.id);

  type Exercise = {
    lexoRank: string;
  };

  const Exercise = () => {
    return (
      <motion.div
        layout="position"
        className="bg-red-300 p-3"
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
        }}
      >
        test{" "}
      </motion.div>
    );
  };

  const addToList = () => {
    setList((prev) => {
      return [
        ...prev,
        {
          element: <Exercise />,

          params: {
            id: Math.random().toString(36).slice(2, 7),
          },
        },
      ];
    });
  };

  const receiveNewList = (newList: SortableItem[]) => {
    setList(newList);
  };

  return (
    <div className="container flex flex-col gap-3">
      <button onClick={addToList}>add to list</button>

      <DndSortableGroup items={list} receiveNewList={receiveNewList} />
    </div>
  );
}
