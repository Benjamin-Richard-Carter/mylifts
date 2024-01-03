"use client";
import type { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

type Props = {
  layoutID?: string;
  layoutMode: "expand" | "shrink" | "square";
  onClick?: React.MouseEventHandler;
};

export const Pill = ({
  children,
  layoutID,
  layoutMode,
  onClick,
}: PropsWithChildren<Props>) => {
  const Element = onClick ? motion.button : motion.div;

  return (
    <Element
      onClick={onClick}
      layoutId={layoutID}
      className={twMerge(
        "flex h-12 w-fit items-center justify-center rounded-full bg-surface-2 p-3",
        layoutMode === "expand" && "w-full",
        layoutMode === "square" && "aspect-square",
      )}
      style={{ borderRadius: "9999px" }}
    >
      {children}
    </Element>
  );
};
