import React from "react";
import { motion } from "framer-motion";

type Props = {
  layoutID?: string;
  layoutMode: "expand" | "shrink" | "square";
  button?: boolean;
  onClick?: React.MouseEventHandler;
  children: React.ReactNode | undefined;
};

export const Pill = ({
  children,
  layoutID,
  layoutMode,
  button,
  onClick,
}: Props) => {
  const Element = button ? motion.button : motion.div;

  return (
    <Element
      onClick={onClick}
      layoutId={layoutID}
      className={`bg-surface-2 flex h-12 items-center justify-center rounded-full p-3 text-2xl
        ${layoutMode === "expand" && "w-full"}
        ${layoutMode === "square" && "aspect-square"}
        `}
      style={{ borderRadius: "9999px" }}
    >
      {children}
    </Element>
  );
};
