import { redirect } from 'next/navigation';
import React from 'react';
export function generateMetadata({ params }) {
  return {
    title: `Override - ${params.slug}`,
  };
}
export default function RenderSlug({ params }) {
  if (['hello', 'welcome', 'goodbye'].includes(params.slug)) {
    redirect(`../${params.slug}`);
  }
  return <h1>{params.slug.toUpperCase()}</h1>;
}
