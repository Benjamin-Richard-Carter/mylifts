"use client";
import React, { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useDetectClickOutside } from "react-detect-click-outside";

type Props = {
  initial: React.ReactNode;
  expanded: React.ReactNode;
  disableClose?: boolean;
  id: string;
};

export default function PopupOutMenu({ expanded, initial, id }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useDetectClickOutside({ onTriggered: () => setIsOpen(false) });

  return (
    <>
      <LayoutGroup id={id}>
        <AnimatePresence>
          <motion.button onClick={() => setIsOpen(true)} key="initial">
            {initial}
          </motion.button>

          {isOpen && (
            <>
              <motion.div
                className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center "
                initial={{ backdropFilter: "blur(0px)" }}
                animate={{ backdropFilter: "blur(15px)" }}
                exit={{ backdropFilter: "blur(0px)" }}
                key="backdrop"
              >
                <motion.div ref={ref} key="expanded">
                  {expanded}
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </>
  );
}
