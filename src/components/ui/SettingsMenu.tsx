"use client";
import { Pill } from "~/components/ui/Pill";
import PopupMenu from "./Popup";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { TbLogout2, TbEdit, TbSettings } from "react-icons/tb";
import { signOut } from "next-auth/react";
import DropdownMenu from "./Dropdown";
import SelectTheme from "./SelectTheme";

export const SettingsMenu = () => {
  const { data: session, status } = useSession();

  return (
    <PopupMenu
      id="settingsMenu"
      initial={
        <Pill
          layoutMode="square"
          background="secondary"
          text="secondary"
          layoutID="settings-menu"
        >
          <span className="text-2xl text-content-3">
            <TbSettings />
          </span>
        </Pill>
      }
      expanded={
        <motion.div
          className="flex w-60 max-w-xs flex-col items-center justify-center gap-3 overflow-clip bg-red-700 p-4"
          transition={{ duration: 0.4 }}
          style={{ borderRadius: "20px" }}
          layoutId="settings-menu"
        >
          Setting
        </motion.div>
      }
    />
  );
};
