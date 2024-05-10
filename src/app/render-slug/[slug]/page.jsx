import React from 'react';
export function generateMetadata({ params }) {
  return {
    title: `${process.env.APP_NAME} Slug - ${params.slug}`,
  };
}
export default function RenderSlug({ params }) {
  return <h1>{params.slug.toUpperCase()}</h1>;
}
export async function generateStaticParams() {
  return [
    {
      slug: 'hello',
    },
    {
      slug: 'welcome',
    },
    {
      slug: 'goodbye',
    },
  ];
}
export const dynamicParams = false;
