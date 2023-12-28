import { connectMongoDB } from '@/libs/mongodb';
import User from '@/models/user';
import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import { createUser, isUserRegistered } from '@/utils/users';
import { SetStateAction } from 'react';

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SCRET } = process.env;

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID as string,
      clientSecret: GOOGLE_CLIENT_SCRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account }: any) {
      if (account.provider === 'google') {
        const { email } = user;
        try {
          const userExist = await isUserRegistered(email);

          if (!userExist) {
            await createUser(user);
          }
        } catch (error) {
          console.log(error);
        }
      }

      return user;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
