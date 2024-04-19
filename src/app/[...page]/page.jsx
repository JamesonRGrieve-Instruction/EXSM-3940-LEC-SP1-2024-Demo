import { Typography } from '@mui/material';
import React from 'react';
export default function Home({ params }) {
  console.log('On Page: ', params);
  return (
    <>
      <Typography variant='h1'>About {params.page.join('/')} Page</Typography>
    </>
  );
}
