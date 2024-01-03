"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  onClick: React.MouseEventHandler;
  icon?: JSX.Element;
  label: string;
};

export const DialogButton = ({ onClick, icon, label }: Props) => {
  return (
    <motion.button
      onClick={onClick}
      className="grid w-full grid-flow-col auto-rows-max items-center gap-5 rounded-2xl bg-surface-2 p-5 text-content-2"
    >
      {icon && (
        <>
          <div className="flex aspect-square h-5 items-center justify-center text-2xl">
            {icon}
          </div>
          <div className="flex justify-end">{label}</div>
        </>
      )}

      {!icon && <div className="justify-center">{label}</div>}
    </motion.button>
  );
};
