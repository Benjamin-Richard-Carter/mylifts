"use client";
import React, { useRef, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useDetectClickOutside } from "react-detect-click-outside";
import { useInView } from "react-intersection-observer";

type Props = {
  initial: React.ReactNode;
  expanded: React.ReactNode;
};

export default function DropdownMenu({ expanded, initial }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const clickRef = useDetectClickOutside({
    onTriggered: () => setIsOpen(false),
  });

  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: false,
  });

  console.log(!inView && isOpen);

  if (!isOpen) {
    return (
      <motion.button
        onClick={() => setIsOpen(true)}
        key="triggerbutton"
        className="relative"
      >
        {initial}
      </motion.button>
    );
  }

  return (
    <motion.div
      onClick={() => setIsOpen(true)}
      key="triggerbutton"
      className="relative"
    >
      {initial}

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            className="absolute mt-5 h-fit rounded-xl bg-surface-1"
            style={{
              translateX: "-50%",
              left: "50%",
              top: "100%",
              transformOrigin: "top center",
              boxShadow: "0px 0px 20px 5px rgba(0,0,0,0.05)",
            }}
            ref={clickRef}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: inView ? 1 : 0,
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0, type: "spring" }}
            key="menu"
          >
            <span ref={ref}>{expanded}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
