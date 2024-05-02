import { Typography } from '@mui/material';
import React from 'react';
export default function Home({ params }) {
  console.log('On Page: ', params);
  return (
    <>
      <Typography variant='h1'>
        About ({params.productCategory}) {params.product} Page
      </Typography>
    </>
  );
}
export async function generateStaticParams() {
  return [
    {
      productCategory: 'electronics',
      product: 'laptop',
    },
    {
      productCategory: 'electronics',
      product: 'phone',
    },
    {
      productCategory: 'electronics',
      product: 'tablet',
    },
    {
      productCategory: 'clothing',
      product: 'shirt',
    },
    {
      productCategory: 'clothing',
      product: 'pants',
    },
    {
      productCategory: 'clothing',
      product: 'hat',
    },
  ];
}
// If the user navigates to a paramset that is not defined, fall back to the catch all (or 404 if not present), rather than dynamically rendering.
export const dynamicParams = false;
