import { getProviders } from "next-auth/react";
import { Suspense } from "react";
import { AuthProviders } from "~/components/auth/authProviders";
import ModalBody from "~/components/dialog/dialogBody";

export default async function SignIn() {
  const providers = getProviders();

  return (
    <ModalBody layoutID="auth">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex w-full flex-col items-center justify-center p-3">
          <div className="p-4 text-center text-lg text-content-1">
            Sign up or log in with an existing account
          </div>
        </div>

        <div className="grid w-full grid-flow-row gap-4 p-4">
          <AuthProviders providersReturn={providers} />
        </div>
      </Suspense>
    </ModalBody>
  );
}
