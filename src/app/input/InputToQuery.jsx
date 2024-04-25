'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
export default function InputToQuery() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  return (
    <form>
      {error && <p>ERROR: {error}</p>}
      <label htmlFor='first_name'>First Name:</label>
      <input type='text' id='first_name' name='first_name' value={firstName} onChange={(event) => setFirstName(event.target.value)} />
      <label htmlFor='last_name'>Last Name:</label>
      <input type='text' id='last_name' name='last_name' value={lastName} onChange={(event) => setLastName(event.target.value)} />
      <button
        type='submit'
        onClick={(event) => {
          event.preventDefault();
          if (!firstName.trim() || !lastName.trim()) {
            setError('Please fill out both fields.');
          } else {
            router.push(`/output?first_name=${firstName.trim()}&last_name=${lastName.trim()}`);
          }
        }}
      >
        Submit
      </button>
    </form>
  );
}
