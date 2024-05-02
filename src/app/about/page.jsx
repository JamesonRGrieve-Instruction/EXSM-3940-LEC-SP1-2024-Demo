'use client';
import { Typography } from '@mui/material';
import React, { useState } from 'react';
import AboutForm from './AboutForm';

export default function Home({ searchParams }) {
  console.log('On Page: ', searchParams);
  const [client, setClient] = useState(false);
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setClient(true);
    }
  }, []);
  return (
    <>
      {/* <h1 className={`${styles.about_heading} ${aboutStyles.about_headings}`}>About Page</h1> */}
      <Typography variant='h1' textAlign='center'>
        About Page
      </Typography>
      {client ? (
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
