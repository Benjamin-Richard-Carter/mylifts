import type {
  Coordinates,
  ClientRect,
  DragMoveEvent,
  DragEndEvent,
  DragStartEvent,
} from "@dnd-kit/core/dist/types";
import type {
  CollisionDescriptor,
  CollisionDetection,
} from "@dnd-kit/core/dist/utilities/algorithms/types";
import { Active, DndMonitorListener, Over, useDndMonitor } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { useState } from "react";

////////////////////////////////////////
// Holdover Manager Hook ///////////////
////////////////////////////////////////

interface useDndIntersectionMonitor extends DndMonitorListener {
  holdOverTime: number;
  holdOverThreshold: number;
  onDragHoldover: (event: DragMoveEvent) => void;
}

export const useDndIntersectionMonitor = ({
  holdOverTime,
  holdOverThreshold,
  onDragMove,
  onDragEnd,
  onDragHoldover,
  ...handlers
}: useDndIntersectionMonitor) => {
  const [overTimeout, setOverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [peakIntersection, setPeakIntersection] = useState<number | null>(null);

  const startIntersectionTimeout = (event: DragMoveEvent) => {
    const id = setTimeout(() => {
      onDragHoldover?.(event);
    }, holdOverTime);
    setOverTimeout(id);
  };

  const intersectionCleanup = () => {
    if (overTimeout) {
      clearTimeout(overTimeout);
      setOverTimeout(null);
    }
    setPeakIntersection(null);
  };

  const intersectionCheck = (event: DragMoveEvent) => {
    const { active, over, collisions } = event;

    if (!collisions || !over || active.id === over.id) {
      return;
    }

    const intersectionRatio: number = collisions[0]?.data?.intersectionRatio;

    if (!intersectionRatio) {
      intersectionCleanup();
      return false;
    }

    if (!peakIntersection) {
      setPeakIntersection(intersectionRatio);
    }

    if (peakIntersection && intersectionRatio > peakIntersection) {
      setPeakIntersection(intersectionRatio);
    }

    if (peakIntersection && intersectionRatio < peakIntersection) {
      intersectionCleanup();
      return false;
    }

    if (intersectionRatio >= holdOverThreshold && !overTimeout) {
      startIntersectionTimeout(event);
    }
    if (intersectionRatio < holdOverThreshold && overTimeout) {
      intersectionCleanup();
    }

    return intersectionRatio;
  };

  useDndMonitor({
    ...handlers,
    onDragMove(event) {
      const blocking = intersectionCheck(event);

      if (!blocking) {
        onDragMove?.(event);
      }
    },
    onDragEnd(event) {
      intersectionCleanup();
      onDragEnd?.(event);
    },
  });
};

////////////////////////////////////////
// DND Utility functions ///////////////
////////////////////////////////////////

function getCenterOfRectangle(rect: ClientRect): Coordinates {
  return {
    x: rect.left + (rect.right - rect.left) * 0.5,
    y: rect.top + (rect.bottom - rect.top) * 0.5,
  };
}

export const getEventRects = (
  event: DragMoveEvent | DragEndEvent | DragStartEvent | null,
) => {
  if (!event) {
    return [null, null];
  }
  const { initial, translated } = event.active.rect.current;
  return [initial, translated];
};

export function distanceBetween(p1: Coordinates, p2: Coordinates) {
  return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}

export function getRectTransform(
  entry: ClientRect | null | undefined,
  target: ClientRect | null | undefined,
): string {
  if (!entry || !target) {
    return "none";
  }

  const x = target.left - entry.left;
  const y = target.top - entry.top;

  return `translate3d(${x}px, ${y}px, 0)`;
}

export function getIntersectionRatio(
  entry: ClientRect,
  target: ClientRect,
): number {
  const targetWidth = target.right - target.left;
  const targetHeight = target.bottom - target.top;

  const top = Math.max(target.top, entry.top);
  const left = Math.max(target.left, entry.left);
  const right = Math.min(target.left + targetWidth, entry.left + entry.width);
  const bottom = Math.min(target.top + targetHeight, entry.top + entry.height);

  const width = right - left;
  const height = bottom - top;

  if (left < right && top < bottom) {
    const targetArea = targetWidth * targetHeight;
    const entryArea = entry.width * entry.height;
    const intersectionArea = width * height;
    const intersectionRatio =
      intersectionArea / (targetArea + entryArea - intersectionArea);
    return Number(intersectionRatio.toFixed(4));
  }

  return 0;
}

export function sortCollisionsAsc(
  { data: { value: a } }: CollisionDescriptor,
  { data: { value: b } }: CollisionDescriptor,
) {
  return a - b;
}

export const closestCenterWithIntersection: CollisionDetection = ({
  collisionRect,
  droppableRects,
  droppableContainers,
}) => {
  const collisions: CollisionDescriptor[] = [];
  const activeCenter = getCenterOfRectangle(collisionRect);

  for (const droppableContainer of droppableContainers) {
    const { id } = droppableContainer;
    const rect = droppableRects.get(id);

    if (rect) {
      const droppableCenter = getCenterOfRectangle(rect);
      const distBetween = distanceBetween(droppableCenter, activeCenter);
      const intersectionRatio = getIntersectionRatio(rect, collisionRect);

      collisions.push({
        id,
        data: {
          droppableContainer,
          value: distBetween,
          intersectionRatio: intersectionRatio,
        },
      });
    }
  }

  return collisions.sort(sortCollisionsAsc);
};
