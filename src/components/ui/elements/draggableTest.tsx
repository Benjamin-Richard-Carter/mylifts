import React, { useContext } from "react";
import { PresentationalCTX } from "~/components/dnd/dndContext";

type Props = {
  id: string;
};

export const DraggableTest = ({ id }: Props) => {
  const over = useContext(PresentationalCTX)?.over?.id === "droppableTarget";

  return (
    <div className={`p-3 ${over ? "bg-red-800" : "bg-gray-50"}`}>
      <h1>{id}</h1>
    </div>
  );
};
