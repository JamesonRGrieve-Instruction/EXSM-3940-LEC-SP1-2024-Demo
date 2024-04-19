import React from 'react';
import { Box } from '@mui/material';
export default function RootLayout({ children }) {
  return (
    <>
      <Box component='main'>{children}</Box>
      <Box component='aside'>This is the about page!</Box>
    </>
  );
}
