import { PrismaAdapter } from "@auth/prisma-adapter";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
import Github from "next-auth/providers/github";
import { env } from "~/env";
import { db } from "~/server/db";
import NextAuth from "next-auth";
import type { NextAuthConfig } from "next-auth";

declare module "next-auth" {
  interface Session {
    theme: string;
  }
}

const adapter = PrismaAdapter(db);

export const authConfig: NextAuthConfig = {
  providers: [
    Google({
      clientId: env.GOOGLE_ID,
      clientSecret: env.GOOGLE_SECRET,
    }),
    Facebook({
      clientId: env.FACEBOOK_ID,
      clientSecret: env.FACEBOOK_SECRET,
    }),
    Github({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
  ],
  secret: env.AUTH_SECRET,

  adapter,

  callbacks: {
    async session({ session, trigger, newSession }) {
      if (trigger === "update" && adapter.updateSession && newSession) {
        await adapter.updateSession({
          sessionToken: session.sessionToken,
          ...newSession,
        });
      }
      const { sessionToken, ...clientSafeSession } = session;
      return clientSafeSession;
    },
  },

  pages: {
    signIn: "auth/signin",
  },

  experimental: {},
};

export const { handlers, auth, signIn, signOut, unstable_update } =
  NextAuth(authConfig);
