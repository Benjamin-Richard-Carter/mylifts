"use client";
import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <motion.div
      className="w-fit font-display text-4xl text-content-1"
      layoutId="logo"
      layout="preserve-aspect"
      transition={{ duration: 0.5 }}
    >
      MYLIFTS
    </motion.div>
  );
};
