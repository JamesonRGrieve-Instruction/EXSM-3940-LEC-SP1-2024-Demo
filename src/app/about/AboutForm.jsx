'use client';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';
export default function AboutForm() {
  const router = useRouter();

  return (
    <Box
      padding='2rem'
      component='form'
      onSubmit={(event) => {
        event.preventDefault();
        const name = event.target.elements.name.value.trim();
        router.push(`/?name=${name}`);
      }}
    >
      <Typography variant='h3' textAlign='center'>
        {process.env.NEXT_PUBLIC_APP_NAME} Form
      </Typography>
      <TextField fullWidth name='name' defaultValue='' />
      <Button fullWidth variant='contained' type='submit'>
        Go Home
      </Button>
    </Box>
  );
}
