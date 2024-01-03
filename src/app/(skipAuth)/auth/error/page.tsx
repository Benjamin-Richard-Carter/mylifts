"use client";
import { ModalButton } from "~/components/ui/modal/ModalButton";
import { FaUndo } from "react-icons/fa";
import { TiWarningOutline } from "react-icons/ti";
import ModalBody from "~/components/ui/modal/ModalBody";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();

  return (
    <>
      <ModalBody layoutID="auth">
        <div className="flex w-full flex-col items-center justify-center p-3">
          <span className="pt-2 text-7xl text-warning">
            <TiWarningOutline />
          </span>

          <div className="flex flex-col gap-5 p-5 pb-10 pt-8 text-center">
            <p className="text-xl text-content-1">Failed to sign in</p>
            <p className="text-md text-content-3">
              Please try again or use another authentication method
            </p>
          </div>

          <ModalButton
            onClick={() => router.push("/auth/signin")}
            icon={<FaUndo />}
            label="Back to sign-in page"
          />
        </div>
      </ModalBody>
    </>
  );
}
