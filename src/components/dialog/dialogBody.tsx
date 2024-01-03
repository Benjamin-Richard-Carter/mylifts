"use client";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  layoutID?: string;
};

export default function DialogBody({ children, layoutID }: Props) {
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
