"use client";
import { SortableContext } from "@dnd-kit/sortable";
import { DndSortableWrapper } from "./dndSortable";
import React, { ReactNode, useMemo, useState } from "react";
import { DndPresentational } from "./dndPresentational";
import { LayoutGroup, motion } from "framer-motion";
import { UniqueIdentifier } from "@dnd-kit/core";
import { SortableArray, SortableGroup, SortableItem } from "~/types/dnd";

type Props = {
  items: SortableArray;
  presentational?: boolean;
};

export const DndSortableGroup = ({ items }: Props) => {
  const [hidden, setHidden] = useState<UniqueIdentifier | null>(null);

  type findItem = (
    id: UniqueIdentifier | null,
  ) => SortableItem | SortableGroup | null;

  const findItem: findItem = (id) => {
    for (const item of items) {
      if (item.id === id) {
        return item;
      }
      if ("children" in item) {
        const child = item.children.find((child) => child.id === id);
        if (child) {
          return child;
        }
      }
    }
    return null;
  };

  const activeItem = findItem(hidden);

  const isActiveItemGroup = activeItem?.params.data?.type === "group";

  const transition = {
    type: "spring",
    duration: 0.2,
  };

  const groupIDs = useMemo(() => items.map((item) => item.id), [items]);

  type createSortableObject = (
    item: SortableItem | SortableGroup,
    presentational: boolean,
  ) => ReactNode;

  const createSortableObject: createSortableObject = (item, presentational) => {
    const isGroup = "children" in item;

    type WrapperElement = {
      children: ReactNode;
      wrappedItem: SortableItem | SortableGroup;
    };

    const WrapperElement = ({ children, wrappedItem }: WrapperElement) => {
      return (
        <motion.div
          layout
          key={wrappedItem.id}
          transition={transition}
          style={{ opacity: hidden === wrappedItem.id ? 0 : 1 }}
        >
          <DndSortableWrapper params={wrappedItem.params} key={wrappedItem.id}>
            {children}
          </DndSortableWrapper>
        </motion.div>
      );
    };

    const sortableRender = (item: SortableItem, presentationalS: boolean) => {
      if (presentationalS || isActiveItemGroup) {
        return item.render({
          id: item.id,
        });
      }

      return (
        <WrapperElement key={item.id} wrappedItem={item}>
          {item.render({
            id: item.id,
          })}
        </WrapperElement>
      );
    };

    const groupRender = (group: SortableGroup, presentationalG: boolean) => {
      if (presentationalG) {
        return group.render({
          id: group.id,
          children: group.children.map((child) => sortableRender(child, true)),
        });
      }

      return (
        <WrapperElement key={group.id} wrappedItem={group}>
          {group.render({
            id: group.id,
            children: group.children.map((child) =>
              sortableRender(child, presentationalG),
            ),
          })}
        </WrapperElement>
      );
    };

    return isGroup
      ? groupRender(item, presentational)
      : sortableRender(item, presentational);
  };

  return (
    <>
      <LayoutGroup id="root">
        <SortableContext items={groupIDs} id="root">
          {items.map((item) => createSortableObject(item, false))}
        </SortableContext>
      </LayoutGroup>

      <DndPresentational setHidden={setHidden}>
        {activeItem && createSortableObject(activeItem, true)}
      </DndPresentational>
    </>
  );
};
