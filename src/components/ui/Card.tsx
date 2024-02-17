"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const cardVariants = tv({
  base: "w-full bg-surface-1 text-content-1 border-solid border-2 border-border p-2 rounded-2xl",
  variants: {},
});

type Props = {
  layoutID?: string;
  className?: string;
  variants?: VariantProps<typeof cardVariants>;
  children?: ReactNode | undefined;
};

export default function Card({
  layoutID,
  children,
  variants,
  className,
}: Props) {
  return (
    <>
      <motion.div
        className={cardVariants({ ...variants, className })}
        layoutId={layoutID}
        layout="position"
      >
        {children}
      </motion.div>
    </>
  );
}
