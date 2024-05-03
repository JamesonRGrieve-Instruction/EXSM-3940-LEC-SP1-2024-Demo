import React from 'react';
import { Box, Typography } from '@mui/material';
import { EB_Garamond } from 'next/font/google';

const ebGaramond = EB_Garamond({
  weight: ['700'],
  subsets: ['latin'],
  style: ['normal'],
});
export const metadata = {
  title: 'Home | Gallery App',
  description: 'The Home page of the Gallery App.',
};
export default function Home() {
  return (
    <>
      <Box component='main'>
        <Typography variant='h1' textAlign='center' className={ebGaramond.className}>
          Welcome to the App!
        </Typography>
      </Box>
    </>
  );
}
