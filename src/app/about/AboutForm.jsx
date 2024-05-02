'use client';
import { Box, TextField, Button } from '@mui/material';
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
      <TextField fullWidth name='name' defaultValue='' />
      <Button fullWidth variant='contained' type='submit'>
        Go Home
      </Button>
    </Box>
  );
}
