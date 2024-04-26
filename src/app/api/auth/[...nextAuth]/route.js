import NextAuth from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '../../../../lib/prisma';

const options = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        console.log(credentials);
        return { id: 1, name: 'John', email: 'john@example.com' };
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
};

export async function GET(req, res) {
  return await NextAuth(req, res, options);
}

export async function POST(req, res) {
  return await NextAuth(req, res, options);
}
