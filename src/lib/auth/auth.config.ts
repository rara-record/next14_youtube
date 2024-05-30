import type { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default {
  secret: process.env.AUTH_SECRET,
  basePath: "/api/auth",
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID || "",
      clientSecret: process.env.AUTH_GOOGLE_SECRET || "",
    }),
  ],
  pages: {
    signIn: "/signin",
    // signOut: "/signout",
  },
} satisfies NextAuthConfig;
