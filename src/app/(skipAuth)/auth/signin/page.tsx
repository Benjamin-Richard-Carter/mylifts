import { getProviders } from "next-auth/react";
import { ProvidersReturnAwaited } from "~/types/auth";
import { use } from "react";
import { AuthProviderButton } from "~/components/ui/primatives/AuthProviderButton";

export default function SignIn() {
  const providers: ProvidersReturnAwaited = use(getProviders());

  if (providers === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-flow-row gap-4">
      {Object.values(providers).map((provider) => (
        <AuthProviderButton provider={provider} />
      ))}
    </div>
  );
}
