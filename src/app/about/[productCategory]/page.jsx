import { Typography } from '@mui/material';
import React from 'react';
export function generateMetadata({ params, searchParams }) {
  return {
    title: 'Category - ' + params.productCategory + ' | ' + searchParams['title'],
  };
}
export default function Home({ params }) {
  console.log('On Page: ', params);
  return (
    <>
      <Typography variant='h1'>About {params.productCategory} Gallery Page</Typography>
    </>
  );
}
