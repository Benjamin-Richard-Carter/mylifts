"use client";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import { ModalButton } from "~/components/ui/modal/ModalButton";
import { signIn } from "next-auth/react";
import { ProvidersReturn } from "~/types/auth";
import { use } from "react";

type Props = {
  providersReturn: ProvidersReturn;
};

export const AuthProviderButtons = ({ providersReturn }: Props) => {
  const providers = use(providersReturn);

  const logos: Record<string, JSX.Element> = {
    Google: <FaGoogle />,
    Facebook: <FaFacebookF />,
    GitHub: <FaGithub />,
  };

  if (!providers) return null;

  return Object.values(providers).map((provider) => (
    <ModalButton
      onClick={() => signIn(provider.id)}
      label={`Continue with ${provider.name}`}
      icon={logos[provider.name]}
    />
  ));
};
