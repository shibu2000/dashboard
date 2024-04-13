import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { connectToDB } from "./app/lib/dbConnection";
import { User } from "./app/lib/model/userModel";
import { authConfig } from "./auth.config";
import bcrypt from "bcrypt";

const login = async (credentials) => {
  try {
    connectToDB();
    const user = await User.findOne({ username: credentials.username });

    if (!user) throw new Error("User not found!");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Wrong Credentials!");

    return user;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.img = user.img;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        session.user.img = token.img;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
  },
});
