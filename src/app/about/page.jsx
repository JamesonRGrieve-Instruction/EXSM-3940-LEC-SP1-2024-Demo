'use client';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import aboutStyles from './about.module.css';
import React from 'react';
export default function Home({ searchParams }) {
  console.log('On Page: ', searchParams);
  const router = useRouter();
  return (
    <>
      {/* <h1 className={`${styles.about_heading} ${aboutStyles.about_headings}`}>About Page</h1> */}
      <h1 className={[styles.about_heading, aboutStyles.about_headings].join(' ')}>About Page</h1>
      <button
        onClick={(event) => {
          event.preventDefault();
          router.push('/?name=Joe');
        }}
      >
        Go Home
      </button>
    </>
  );
}
