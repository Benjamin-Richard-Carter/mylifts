"use client";
import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";
import { tv, type VariantProps } from "tailwind-variants";

export type CardVariants = VariantProps<typeof cardVariants>;

const cardVariants = tv({
  base: "flex w-full overflow-clip bg-surface-1 text-content-1",
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

    rounded: {
      1: "rounded-sm",
      2: "rounded-md",
      3: "rounded-lg",
      4: "rounded-xl",
      5: "rounded-2xl",
      6: "rounded-3xl",
      7: "rounded-full",
    },
  },
});

type Props = {
  layoutID?: string;
};

export default function Card({
  children,
  layoutID,
  background,
  text,
  rounded,
}: PropsWithChildren<Props & CardVariants>) {
  return (
    <>
      <motion.div
        className={cardVariants({
          background,
          text,
          rounded,
        })}
        layoutId={layoutID}
        layout="position"
      >
        {children}
      </motion.div>
    </>
  );
}
