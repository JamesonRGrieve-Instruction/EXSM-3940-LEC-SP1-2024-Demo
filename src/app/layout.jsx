import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import { SessionProvider } from 'next-auth/react';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'UAlberta FullStack',
  description: 'An application created by a student of the University of Alberta Fullstack Web Application Development program.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <SessionProvider session={{}}>{children}</SessionProvider>
      </body>
    </html>
  );
}
