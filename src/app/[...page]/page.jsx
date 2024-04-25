import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import ducksImage from '../../../public/img/ducks.jpeg';
import React from 'react';
export const metadata = {
  title: 'About us page.',
};
export default function Home({ params }) {
  console.log('On Page: ', params);
  return (
    <>
      <Typography variant='h1'>About {params.page.join('/')} Page</Typography>
      <Image src={ducksImage} alt='A bunch of rubber ducks.' width='1280' height='853' placeholder='blur' />
      <Image src='https://cdn.pixabay.com/photo/2017/02/21/16/30/mexico-2086549_1280.jpg' alt='A turtle.' width='1280' height='960' />
      <Box width='30rem' height='20rem' position='relative'>
        <Image src='https://cdn.pixabay.com/photo/2020/03/09/02/22/jellyfish-4914197_1280.jpg' alt='A turtle.' layout='fill' objectFit='contain' />
      </Box>
    </>
  );
}
