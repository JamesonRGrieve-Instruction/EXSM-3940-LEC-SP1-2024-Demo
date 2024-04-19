import React, { Suspense } from 'react';
import SearchParamRenderer from './SearchParamRender';
import { Box, Typography } from '@mui/material';
export default function Home() {
  // This log will run on both server and client, because it is in the body of a client component.
  console.log('Loaded Home!');
  return (
    <>
      <Box component='main'>
        <Typography variant='h1'>Home Page</Typography>
      </Box>
      <Box component='aside'>
        <Suspense>
          <SearchParamRenderer />
        </Suspense>
      </Box>
    </>
  );
}
