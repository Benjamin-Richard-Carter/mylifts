"use client";
import React from "react";
import { motion } from "framer-motion";
import { ClientSafeProvider, signIn } from "next-auth/react";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";

type Props = {
  layoutID?: string;
  provider: ClientSafeProvider;
};

export const AuthProviderButton = ({ layoutID, provider }: Props) => {
  const logos: Record<string, JSX.Element> = {
    Google: <FaGoogle />,
    Facebook: <FaFacebookF />,
    GitHub: <FaGithub />,
  };

  return (
    <motion.button
      onClick={() => signIn(provider.id)}
      layoutId={layoutID}
      className="grid grid-flow-col auto-rows-max items-center gap-5 rounded-2xl bg-surface-1 p-5 text-content-2"
    >
      <div className="flex aspect-square h-7 items-center justify-center text-2xl">
        {logos[provider.name]}
      </div>

      <div className=" flex items-center justify-end">
        Sign in with {provider.name}
      </div>
    </motion.button>
  );
};
