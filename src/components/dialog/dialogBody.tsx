"use client";
import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

type Props = {
  layoutID?: string;
};

export default function DialogBody({
  children,
  layoutID,
}: PropsWithChildren<Props>) {
  return (
    <>
      <motion.div
        className="flex w-full flex-col items-center justify-center overflow-clip rounded-3xl bg-surface-1 shadow-sm"
        layoutId={layoutID}
        layout="position"
      >
        {children}
      </motion.div>
    </>
  );
}
