'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
export default function Home({ searchParams }) {
  console.log('On Page: ', searchParams);
  const router = useRouter();
  return (
    <>
      {/* <h1 className={`${styles.about_heading} ${aboutStyles.about_headings}`}>About Page</h1> */}
      <h1>About Page</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const name = event.target.elements.name.value.trim();
          router.push(`/?name=${name}`);
        }}
      >
        <input type='text' name='name' defaultValue='' />
        <button type='submit'>Go Home</button>
      </form>
    </>
  );
}
