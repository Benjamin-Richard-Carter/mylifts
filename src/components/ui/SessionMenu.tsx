"use client";
import { Pill } from "~/components/ui/Pill";
import PopupMenu from "./Popup";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import {
  TbLogout2,
  TbEdit,
  TbSettings,
  TbChecklist,
  TbCheckupList,
} from "react-icons/tb";

export const SessionMenu = () => {
  return (
    <PopupMenu
      id="sessionMenu"
      initial={
        <Pill layoutMode="square" background="secondary" text="secondary">
          <span className="text-2xl text-content-3">
            <TbCheckupList />
          </span>
        </Pill>
      }
      expanded={
        <motion.div
          className="flex w-60 max-w-xs flex-col items-center justify-center gap-3 overflow-clip bg-red-700 p-4"
          transition={{ duration: 0.4 }}
          style={{ borderRadius: "20px" }}
        >
          Setting
        </motion.div>
      }
    />
  );
};
