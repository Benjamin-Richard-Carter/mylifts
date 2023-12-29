"use client";
import { LayoutGroup } from "framer-motion";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export const NavBar = ({ children }: PropsWithChildren) => {
  return (
    <div className="sticky top-0 w-full">
      <LayoutGroup id="nav">
        <motion.div
          className="w-full bg-surface-1 pt-safe sm:mt-7 sm:bg-opacity-0"
          layout
        >
          <motion.div
            className="flex max-w-full flex-col gap-4 p-4 sm:bg-surface-1"
            layout
            style={{ borderRadius: "35px" }}
          >
            {children}
          </motion.div>
        </motion.div>
      </LayoutGroup>
    </div>
  );
};
