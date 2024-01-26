"use client";
import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <motion.div
      className="w-fit rounded-2xl bg-surface-1 pt-1 font-display text-4xl text-content-1"
      layoutId="logo"
      layout="preserve-aspect"
      transition={{ duration: 0.5 }}
    >
      MYLIFTS
    </motion.div>
  );
};
