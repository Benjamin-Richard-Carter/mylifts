"use client";
import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

export default function DialogOverlay({ children }: PropsWithChildren) {
  return (
    <>
      <motion.div
        className="absolute h-full w-full bg-red-500 opacity-10"
        layout="position"
      >
        {children}
      </motion.div>
    </>
  );
}
