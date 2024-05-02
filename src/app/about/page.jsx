import { Typography } from '@mui/material';
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
      <AboutForm />
    </>
  );
}
