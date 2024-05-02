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
    </>
  );
}
