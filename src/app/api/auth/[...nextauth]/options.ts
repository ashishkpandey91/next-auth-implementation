import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

type User = {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
  id: string; // Add the id property
};
export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
 
  callbacks: {
    async signIn() {
      return true;
    },
    async session({ session, token }) {
      if(session.user){
        session.user.id = token.id;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        // Generate a unique ID (e.g., UUID or hash) for new users.
        token.id = user.id || `user_${Date.now()}_${Math.random().toString(36).substring(2)}`;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
