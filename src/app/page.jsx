import React, { Suspense } from 'react';
import SearchParamRenderer from './SearchParamRender';
import { Box, Typography } from '@mui/material';
import { Josefin_Sans } from 'next/font/google';

const josefinSans700 = Josefin_Sans({
  weight: '700',
  subsets: ['latin'],
});
const josefinSans100 = Josefin_Sans({
  weight: '100',
  subsets: ['latin'],
});

export default function Home() {
  // This log will run on both server and client, because it is in the body of a client component.
  console.log('Loaded Home!');
  return (
    <>
      <Box component='main'>
        <Typography variant='h1' className={josefinSans700.className}>
          Home
        </Typography>
        <Typography variant='h1' className={josefinSans100.className}>
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
