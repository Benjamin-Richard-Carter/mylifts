"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  layoutID?: string;
  layoutMode: "expand" | "shrink" | "square";
  onClick?: React.MouseEventHandler;
  children: React.ReactNode | undefined;
};

export const Pill = ({ children, layoutID, layoutMode, onClick }: Props) => {
  const Element = onClick ? motion.button : motion.div;

  return (
    <Element
      onClick={onClick}
      layoutId={layoutID}
      className={`flex h-12 items-center justify-center rounded-full bg-surface-2 p-3 text-2xl
        ${layoutMode === "expand" && "w-full"}
        ${layoutMode === "square" && "aspect-square"}
        `}
      style={{ borderRadius: "9999px" }}
    >
      {children}
    </Element>
  );
};
