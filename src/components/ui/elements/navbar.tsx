import { LayoutGroup } from "framer-motion";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export const NavBar = ({ children }: PropsWithChildren) => {
  return (
    <div className="sticky top-0 w-full">
      <LayoutGroup id="nav">
        <motion.div
          className="bg-surface-1 w-full sm:mt-7 sm:bg-opacity-0"
          layout
        >
          <motion.div
            className="sm:bg-surface-1 flex max-w-full flex-col gap-4 p-4"
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
