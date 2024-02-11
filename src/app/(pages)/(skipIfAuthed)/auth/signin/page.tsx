import { AuthProviderButton } from "~/components/auth/authProviderButton";
import ModalBody from "~/components/dialog/dialogBody";
import { getAuthProviders } from "~/utils/auth";

export default async function SignIn() {
  const providers = await getAuthProviders();

  return (
    <ModalBody layoutID="auth">
      <div className="flex w-full flex-col items-center justify-center p-3">
        <div className="p-4 text-center text-lg text-content-1">
          Sign up or log in with an existing account
        </div>
      </div>

      <div className="grid w-full grid-flow-row gap-4 p-4">
        {providers.map((provider) => (
          <AuthProviderButton id={provider.id} name={provider.name} />
        ))}
      </div>
    </ModalBody>
  );
}
