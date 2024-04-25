'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react';

export default function OutputFromQuery() {
  const searchParams = useSearchParams();
  const displayMode = searchParams.get('display_mode');
  const firstName = searchParams.get('first_name');
  const lastName = searchParams.get('last_name');
  return (
    <>
      <p>{displayMode === 'lastFirst' ? `${lastName}, ${firstName}` : `${firstName} ${lastName}`}</p>
    </>
  );
}
