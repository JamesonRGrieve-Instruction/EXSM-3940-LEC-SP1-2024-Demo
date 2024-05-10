import React from 'react';
export function generateMetadata({ searchParams }) {
  return {
    title: `${process.env.APP_NAME} Query - ${searchParams.query}`,
  };
}
export default function RenderSlug({ searchParams }) {
  return <h1>{searchParams.query.toUpperCase()}</h1>;
}
