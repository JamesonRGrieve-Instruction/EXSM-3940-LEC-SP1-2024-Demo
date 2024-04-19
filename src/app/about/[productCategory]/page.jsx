import React from 'react';
import aboutStyles from '../about.module.css';
export default function Home({ params }) {
  console.log('On Page: ', params);
  return (
    <>
      <h1 className={aboutStyles.about_headings}>About {params.productCategory} Gallery Page</h1>
    </>
  );
}
