"use client";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import { DialogButton } from "~/components/dialog/dialogButton";
import { signIn } from "~/auth";
import { getProviders } from "~/utils/auth";
import { use } from "react";

export const AuthProviderButtons = () => {
  //const providers = use(getProviders());

  return <div>Providers</div>;

  // const logos: Record<string, JSX.Element> = {
  //   Google: <FaGoogle />,
  //   Facebook: <FaFacebookF />,
  //   GitHub: <FaGithub />,
  // };

  // return Object.values(providers).map((provider) => (
  //   <DialogButton
  //     onClick={() => signIn(provider.id)}
  //     label={`Continue with ${provider.name}`}
  //     icon={logos[provider.name]}
  //   />
  // ));
};
