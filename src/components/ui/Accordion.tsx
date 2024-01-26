"use client";
import { motion } from "framer-motion";
import { useState, type PropsWithChildren } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export type CardVariants = VariantProps<typeof cardVariants>;

const cardVariants = tv({
  base: "flex w-full overflow-clip bg-surface-1 text-content-1 flex-col",
  variants: {
    background: {
      primary: "bg-surface-1",
      secondary: "bg-surface-2",
      tertiary: "bg-surface-3",
      highlight: "bg-highlight",
    },

    text: {
      primary: "text-content-1",
      secondary: "text-content-2",
      tertiary: "text-content-3",
    },

    rounded: {
      1: "rounded-sm",
      2: "rounded-md",
      3: "rounded-lg",
      4: "rounded-xl",
      5: "rounded-2xl",
      6: "rounded-3xl",
      7: "rounded-full",
    },
  },
});

type Props = {
  layoutID?: string;
  title?: string;
};

export default function Accordion({
  children,
  layoutID,
  background,
  text,
  title,
}: PropsWithChildren<Props & CardVariants>) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <motion.div
        className={cardVariants({
          background,
          text,
        })}
        layoutId={layoutID}
        layout
        style={{ borderRadius: "15px" }}
      >
        <motion.div
          className="flex justify-between p-4 font-semibold"
          layout="position"
        >
          {title}

          <button
            className="text-2xl text-content-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen && <IoIosArrowUp />}
            {!isOpen && <IoIosArrowDown />}
          </button>
        </motion.div>

        {isOpen && <motion.div layout="position">{children}</motion.div>}
      </motion.div>
    </>
  );
}
