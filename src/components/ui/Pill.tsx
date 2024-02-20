"use client";
import type { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { tv, type VariantProps } from "tailwind-variants";

export type PillVariants = VariantProps<typeof pillVariants>;

const pillVariants = tv({
  base: "flex h-12 items-center justify-center overflow-clip transition-colors duration-700 bg-surface-1",
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
      square: "aspect-square shrink-0	",
    },
  },
});

type Props = {
  layoutID?: string;
  className?: string;
  onClick?: React.MouseEventHandler;
};

export const Pill = ({
  children,
  layoutID,
  layoutMode,
  background,
  text,
  className,
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
        className,
      })}
      style={{ borderRadius: "50px" }}
    >
      {children}
    </Element>
  );
};
