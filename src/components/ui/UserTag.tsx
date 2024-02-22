"use client";
import { Pill } from "~/components/ui/Pill";
import PopupMenu from "./Popup";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { TbLogout2, TbEdit, TbSettings } from "react-icons/tb";
import { signOut } from "next-auth/react";
import { UserTagV2 } from "./UserTagV2";

export const UserTag = () => {
  const { data: session } = useSession();

  return (
    <PopupMenu
      id="userMenu"
      key="oiklh"
      initial={<UserTagV2 />}
      expanded={
        <motion.div
          className="flex w-fit flex-col overflow-clip bg-surface-1 p-2"
          style={{ borderRadius: "20px" }}
          layoutId="user-menu"
          key="user-menu"
        >
          <motion.div className="flex flex-col items-center justify-center gap-3 p-4 text-content-2">
            {session && (
              <motion.img
                src={session.user.image || undefined}
                className="aspect-square h-20 rounded-full"
                layoutId="user-image"
                key="user-image"
                referrerPolicy="no-referrer"
              />
            )}

            <motion.div className="flex flex-col gap-1 text-center">
              <motion.p
                className="text-xl text-content-1"
                layoutId="user-nametag"
              >
                {session?.user?.name}
              </motion.p>
              <motion.p className="text-sm text-content-3">
                {session?.user?.email}
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div className="flex flex-row items-center justify-center gap-5  p-3">
            <div className="flex w-fit flex-col items-center gap-2">
              <Pill
                layoutMode="square"
                background="secondary"
                onClick={() => signOut()}
              >
                <span className="text-2xl text-content-3">
                  <TbLogout2 />
                </span>
              </Pill>
              <p className="text-xs font-semibold text-content-3">Sign out</p>
            </div>

            <div className="flex w-fit flex-col items-center gap-2">
              <Pill layoutMode="square" background="secondary">
                <span className="text-2xl text-content-3">
                  <TbEdit />
                </span>
              </Pill>

              <p className="text-xs font-semibold text-content-3">Profile</p>
            </div>

            <div className="flex w-fit flex-col items-center gap-2">
              <Pill layoutMode="square" background="secondary">
                <span className="text-2xl text-content-3">
                  <TbSettings />
                </span>
              </Pill>

              <p className="text-xs font-semibold text-content-3">Settings</p>
            </div>
          </motion.div>
        </motion.div>
      }
    />
  );
};
