"use client";
import { LayoutGroup, motion } from "framer-motion";
import { useState, type PropsWithChildren } from "react";
import { TbCheck, TbX } from "react-icons/tb";
import { useSession } from "next-auth/react";
import { themeNameDictionaryV2, themes } from "~/styles/themes";
import revalidateRootLayout from "~/server/actions/revalidateRootLayout";
import { ImSpinner3 } from "react-icons/im";
import PopupMenu from "./Popup";
import DropdownMenu from "./Dropdown";

export default function SelectTheme() {
  const [AwaitingUpdate, setAwaitingUpdate] = useState<string | null>(null);
  const { data: session, update } = useSession();
  const stuff = themeNameDictionaryV2(themes);
  const activeThemeName = session?.theme.replace(/_/g, " ") || "Default";
  const activeTheme = session?.theme;

  const updateTheme = async (theme: string) => {
    if (theme !== activeTheme) {
      try {
        setAwaitingUpdate(theme);
        await update({ theme });
        revalidateRootLayout();
      } catch (error) {
        console.error("Error updating theme:", error);
      } finally {
        setAwaitingUpdate(null);
      }
    }
  };

  return (
    <LayoutGroup>
      <DropdownMenu
        initial={
          <motion.div className="aspect-square h-20 bg-red-600">
            open
          </motion.div>
        }
        expanded={
          <motion.div
            className="w-52 overflow-clip rounded-xl bg-red-400"
            //layoutId="popup"
          >
            {stuff.map((item) => (
              <motion.button
                onClick={() => updateTheme(item.themeName)}
                key={item.displayName}
                className="flex w-full justify-between p-4 px-5 outline-2 outline-border hover:z-50 hover:bg-surface-2 hover:outline"
              >
                {item.displayName}

                {activeTheme === item.themeName && (
                  <div className="text-2xl">
                    <TbCheck />
                  </div>
                )}

                {AwaitingUpdate === item.themeName && (
                  <div className="animate-spin text-2xl">
                    <ImSpinner3 />
                  </div>
                )}
              </motion.button>
            ))}
          </motion.div>
        }
      />
    </LayoutGroup>
  );
}
