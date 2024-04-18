'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
export default function Home({ searchParams }) {
  console.log('On Page: ', searchParams);
  const router = useRouter();
  return (
    <>
      <h1>About Page</h1>
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
