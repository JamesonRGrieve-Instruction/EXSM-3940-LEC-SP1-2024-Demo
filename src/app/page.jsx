import React, { Suspense } from 'react';
import SearchParamRenderer from './SearchParamRender';
import { Box, Typography } from '@mui/material';
import { Josefin_Sans } from 'next/font/google';

const josefinSans = Josefin_Sans({
  weight: ['100', '200', '300', '600', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
});

export default function Home() {
  // This log will run on both server and client, because it is in the body of a client component.
  console.log('Loaded Home!');
  return (
    <>
      <Box component='main'>
        <Typography variant='h1' fontWeight='600' fontStyle='italic' className={josefinSans.className}>
          Home
        </Typography>
        <Typography variant='h1' className={josefinSans.className}>
          Page
        </Typography>
      </Box>
      <Box component='aside'>
        <Suspense>
          <SearchParamRenderer />
        </Suspense>
      </Box>
    </>
  );
}
