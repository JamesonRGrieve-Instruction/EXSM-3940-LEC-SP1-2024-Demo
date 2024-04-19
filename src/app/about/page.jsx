'use client';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import aboutStyles from './about.module.css';
import React, { useState } from 'react';
export default function Home({ searchParams }) {
  console.log('On Page: ', searchParams);
  const router = useRouter();
  const [name, setName] = useState('');
  return (
    <>
      {/* <h1 className={`${styles.about_heading} ${aboutStyles.about_headings}`}>About Page</h1> */}
      <h1 className={[styles.about_heading, aboutStyles.about_headings].join(' ')}>About Page</h1>
      <input type='text' value={name} onChange={(event) => setName(event.target.value)} />
      <button
        onClick={(event) => {
          event.preventDefault();
          router.push(`/?name=${name.trim()}`);
        }}
      >
        Go Home
      </button>
    </>
  );
}
