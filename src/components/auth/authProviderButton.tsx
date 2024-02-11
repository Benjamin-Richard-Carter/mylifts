"use client";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import { DialogButton } from "~/components/dialog/dialogButton";
import { signIn } from "next-auth/react";
import type { ClientSafeProvider } from "node_modules/next-auth/lib/client";

type Props = Pick<ClientSafeProvider, "id" | "name">;

export const AuthProviderButton = ({ id, name }: Props) => {
  const logos: Record<string, JSX.Element> = {
    Google: <FaGoogle />,
    Facebook: <FaFacebookF />,
    GitHub: <FaGithub />,
  };

  return (
    <DialogButton
      onClick={() => signIn(id)}
      label={`Continue with ${name}`}
      icon={logos[name]}
    />
  );
};
