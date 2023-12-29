import { getProviders } from "next-auth/react";

export type ProvidersReturn = ReturnType<typeof getProviders>;
export type ProvidersReturnAwaited = Awaited<ProvidersReturn>;
