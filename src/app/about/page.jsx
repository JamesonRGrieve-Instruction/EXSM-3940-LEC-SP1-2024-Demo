import { Typography, Button, Box, TextField } from '@mui/material';
import React from 'react';
import AboutForm from './AboutForm';

export default function Home({ searchParams }) {
  console.log('On Page: ', searchParams);
  return (
    <>
      {/* <h1 className={`${styles.about_heading} ${aboutStyles.about_headings}`}>About Page</h1> */}
      <Typography variant='h1' textAlign='center'>
        About Page
      </Typography>
      {typeof window !== 'undefined' ? (
        <Typography variant='body1' textAlign='center'>
          This is the about page on mobile!
        </Typography>
      ) : (
        <Typography variant='h5' textAlign='center'>
          This is the about page on desktop!
        </Typography>
      )}
      <AboutForm />
      <Box component='form' action='/api/submission' method='POST' enctype='application/x-www-form-urlencoded'>
        <TextField fullWidth name='name' defaultValue='' />
        <Button type='submit' name='slug'>
          Slug
        </Button>
        <Button type='submit' name='query'>
          Query
        </Button>
      </Box>
    </>
  );
}
