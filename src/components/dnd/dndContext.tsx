"use client";
import { PropsWithChildren } from "react";
import {
  useSensors,
  useSensor,
  MouseSensor,
  TouchSensor,
  DndContext,
  DragMoveEvent,
} from "@dnd-kit/core";
import { createContext } from "react";
import {
  useDroppableReturn,
  UseDraggableReturn,
  UseSortableReturn,
} from "~/types/dnd";
import { closestCenterWithIntersection } from "~/utils/dnd";

export const DroppableCTX = createContext<useDroppableReturn | null>(null);
export const DraggableCTX = createContext<UseDraggableReturn | null>(null);
export const SortableCTX = createContext<UseSortableReturn | null>(null);
export const PresentationalCTX = createContext<DragMoveEvent | null>(null);

export const DndContextWrapper = ({ children }: PropsWithChildren) => {
  const DNDsensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 10,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 100,
        tolerance: 5,
      },
    }),
  );

  return (
    <DndContext
      sensors={DNDsensors}
      collisionDetection={closestCenterWithIntersection}
    >
      {children}
    </DndContext>
  );
};
