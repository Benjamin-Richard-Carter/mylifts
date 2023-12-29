import { TiWarningOutline } from "react-icons/ti";

export default function AuthError() {
  return (
    <div className="flex w-full flex-col items-center justify-center overflow-clip rounded-3xl bg-surface-1">
      <div className="bg-warning flex w-full flex-col items-center justify-center  p-3">
        <div className="p-1 text-5xl text-content-1">
          <TiWarningOutline />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-3">
        <div className="pt-7 text-xl font-bold text-content-1">
          Sign in failed
        </div>

        <div className="p-5 pt-10 text-center text-content-2">
          Please try again or use a different authentication method
        </div>

        <button className="mt-4 w-full rounded-2xl bg-surface-2 p-3 text-content-3">
          Back to login
        </button>
      </div>
    </div>
  );
}
