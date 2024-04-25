'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react';

export default function OutputFromQuery() {
  const searchParams = useSearchParams();
  const firstName = searchParams.get('first_name');
  const lastName = searchParams.get('last_name');
  return (
    <>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
    </>
  );
}
