'use client';
//import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
export default function Home() {
  //const searchParams = useSearchParams();
  //console.log('Name SearchParam: ', searchParams.get('name'));
  // This log will run on both server and client, because it is in the body of a client component.
  console.log('Loaded Home!');
  useEffect(() => {
    // This log will run only on the client, because it is in a client-side hook.
    console.log('Mounted Home!');
  }, []);
  return <h1>Home Page</h1>;
}
