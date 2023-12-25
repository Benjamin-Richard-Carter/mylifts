import React from "react";
import { motion } from "framer-motion";

type Props = {
  layoutID?: string;
  layoutMode: "expand" | "shrink";
  square?: boolean;
  button?: boolean;
  onClick?: React.MouseEventHandler;
  children: React.ReactNode | undefined;
};

export const Pill = ({
  children,
  layoutID,
  layoutMode,
  square,
  button,
  onClick,
}: Props) => {
  const Element = button ? motion.button : motion.div;

  return (
    <Element
      onClick={onClick}
      layoutId={layoutID}
      className={`bg-surface-500 text-UiText-1 flex items-center justify-center overflow-clip truncate text-xl leading-tight 
        ${layoutMode === "expand" && "flex-1"}
        ${square ? "aspect-square" : ""}`}
      style={{ borderRadius: "9999px" }}
    >
      {children}
    </Element>
  );
};
