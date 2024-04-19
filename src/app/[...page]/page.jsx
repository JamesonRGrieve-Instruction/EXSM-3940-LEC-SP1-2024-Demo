import React from 'react';
export default function Home({ params }) {
  console.log('On Page: ', params);
  return (
    <>
      <h1>About {params.page.join('/')} Page</h1>
    </>
  );
}
