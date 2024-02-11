"use client";
import type { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { tv, type VariantProps } from "tailwind-variants";

export type PillVariants = VariantProps<typeof pillVariants>;

const pillVariants = tv({
  base: "flex h-12 w-fit items-center justify-center overflow-clip border-solid border-2 border-border transition-colors duration-700",
  variants: {
    background: {
      primary: "bg-surface-1",
      secondary: "bg-surface-2",
      tertiary: "bg-surface-3",
      highlight: "bg-highlight",
    },

    text: {
      primary: "text-content-1",
      secondary: "text-content-2",
      tertiary: "text-content-3",
    },

    layoutMode: {
      expand: "w-full",
      shrink: "w-fit",
      square: "aspect-square",
    },
  },
});

type Props = {
  layoutID?: string;
  onClick?: React.MouseEventHandler;
};

export const Pill = ({
  children,
  layoutID,
  layoutMode,
  background,
  text,
  onClick,
}: PropsWithChildren<Props & PillVariants>) => {
  const Element = onClick ? motion.button : motion.div;

  return (
    <Element
      onClick={onClick}
      layoutId={layoutID}
      className={pillVariants({
        layoutMode,
        background,
        text,
      })}
      style={{ borderRadius: "9999px" }}
    >
      {children}
    </Element>
  );
};
