import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: `${process.env.APP_NAME}`,
  description: 'An application created by a student of the University of Alberta Fullstack Web Application Development program.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header>
          <h1>{process.env.APP_NAME}</h1>
          <form action={`/api/submission`} method='POST'>
            <input name='argument' type='text' />
            <input type='submit' name='slug' value='Render Slug' />
            <input type='submit' name='override' value='Render Slug (Override)' />
            <input type='submit' name='query' value='Render Query' />
          </form>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
