import { Typography, Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import ducksImage from '../../../public/img/ducks.jpeg';
import { EB_Garamond } from 'next/font/google';

const ebGaramond = EB_Garamond({
  weight: ['700'],
  subsets: ['latin'],
  style: ['normal'],
});
export const metadata = {
  title: 'Gallery | Gallery App',
  description: 'The Gallery.',
};
export default function Gallery({ searchParams }) {
  console.log('On Page: ', searchParams);
  return (
    <>
      {/* <h1 className={`${styles.about_heading} ${aboutStyles.about_headings}`}>About Page</h1> */}
      <Typography variant='h1' textAlign='center' fontWeight='700' className={ebGaramond.className}>
        Image Gallery
      </Typography>
      <Box display='grid' gridTemplateColumns='1fr 1fr' gridTemplateRows='1fr 1fr' width='80%' height='800px' margin='0 auto' gap='1rem'>
        <Box position='relative' gridColumn='0 span 1' gridRow='0 span 1'>
          <Image src='https://cdn.pixabay.com/photo/2020/03/09/02/22/jellyfish-4914197_1280.jpg' alt='A jellyfish.' fill objectFit='cover' />
        </Box>
        <Box position='relative'>
          <Image src='https://cdn.pixabay.com/photo/2023/08/18/15/02/cat-8198720_1280.jpg' alt='A cat.' fill objectFit='cover' />
        </Box>
        <Box position='relative'>
          <Image src='https://cdn.pixabay.com/photo/2024/03/14/08/52/pug-8632718_1280.jpg' alt='A dog.' fill objectFit='cover' />
        </Box>
        <Box position='relative'>
          <Image src={ducksImage} alt='Rubber ducks.' fill objectFit='cover' />
        </Box>
      </Box>
    </>
  );
}
