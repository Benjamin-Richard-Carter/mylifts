import { getBaseUrl } from "~/trpc/shared";
import type { ClientSafeProvider } from "node_modules/next-auth/lib/client";

export const getAuthProviders = async (): Promise<ClientSafeProvider[]> => {
  const URI = getBaseUrl() + "/api/auth/providers";
  const response = await fetch(URI).then((res) => res.json());
  const providers: ClientSafeProvider[] = Object.values(response);
  return providers;
};
