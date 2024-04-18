import React, { Suspense } from 'react';
import SearchParamRenderer from './SearchParamRender';
export default function Home() {
  // This log will run on both server and client, because it is in the body of a client component.
  console.log('Loaded Home!');
  return (
    <>
      <h1>Home Page</h1>
      <Suspense>
        <SearchParamRenderer />
      </Suspense>
    </>
  );
}
