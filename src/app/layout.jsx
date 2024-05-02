import { Inter } from 'next/font/google';
import './globals.css';

import React from 'react';
import Navigation from '../components/Navigation';
import ThemeWrapper from './ThemeWrapper';
import { Typography } from '@mui/material';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'UAlberta FullStack',
  description: 'An application created by a student of the University of Alberta Fullstack Web Application Development program.',
  'og:title': 'UAlberta FullStack',
  'og:description': 'An application created by a student of the University of Alberta Fullstack Web Application Development program.',
  'og:image': 'https://cdn.pixabay.com/photo/2017/02/21/16/30/mexico-2086549_1280.jpg',
  'og:image:alt': 'A turtle.',
  'og:url': 'http://localhost:3000',
  'og:type': 'website',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeWrapper>
          <header>
            <Typography variant='h1' textAlign='center'>
              {process.env.APP_NAME}
            </Typography>
            <Navigation />
          </header>
          <div>{children}</div>
        </ThemeWrapper>
      </body>
    </html>
  );
}
