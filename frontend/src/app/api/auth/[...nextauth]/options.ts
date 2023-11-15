import { UserType } from "@/types";
import axios from "axios";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        const inputsUser: UserType | Record<never, string> | undefined =
          credentials;
        try {
          const user: UserType | any = await axios.post(
            "http://localhost/Stocker/backend/auth.php",
            JSON.stringify(inputsUser), // data goes here
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (user.error) {
            return null;
          } else {
            return user;
          }
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
    signOut: "/",
  },
};
