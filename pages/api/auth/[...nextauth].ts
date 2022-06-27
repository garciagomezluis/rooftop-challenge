import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const googleProvider = GoogleProvider({
  clientId: process.env.GOOGLE_ID!,
  clientSecret: process.env.GOOGLE_SECRET!,
});

export default NextAuth({
  providers: [googleProvider],
  secret: process.env.NEXTAUTH_SECRET
});
