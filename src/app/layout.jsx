import { Inter } from 'next/font/google';
import './globals.css';
// Don't mix this up with the MUI Link unless you inject the NextJS Link functionality therein via theming, etc.
import Link from 'next/link';
import React from 'react';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'UAlberta FullStack',
  description: 'An application created by a student of the University of Alberta Fullstack Web Application Development program.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header>
          <nav>
            <ul>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/about'>About</Link>
              </li>
              <li>
                <Link href='/about/me'>About Me</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
