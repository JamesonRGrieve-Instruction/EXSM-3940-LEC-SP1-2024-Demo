'use client';
import { Typography, Box, TextField, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Home({ searchParams }) {
  console.log('On Page: ', searchParams);
  const router = useRouter();
  return (
    <>
      {/* <h1 className={`${styles.about_heading} ${aboutStyles.about_headings}`}>About Page</h1> */}
      <Typography variant='h1' textAlign='center'>
        About Page
      </Typography>
      <Box
        padding='2rem'
        component='form'
        onSubmit={(event) => {
          event.preventDefault();
          const name = event.target.elements.name.value.trim();
          router.push(`/?name=${name}`);
        }}
      >
        <TextField fullWidth name='name' defaultValue='' />
        <Button fullWidth variant='contained' type='submit'>
          Go Home
        </Button>
      </Box>
    </>
  );
}
