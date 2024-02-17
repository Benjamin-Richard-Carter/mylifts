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
        className="flex w-60 max-w-xs flex-col items-center justify-center overflow-clip rounded-3xl bg-surface-1 shadow-3xl outline outline-2 outline-border"
        layoutId={layoutID}
        transition={{
          type: "spring",
          duration: 0.5,
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
