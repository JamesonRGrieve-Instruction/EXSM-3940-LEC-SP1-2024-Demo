'use client';
import React, { useState } from 'react';
export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <main>
      <h1>Counter</h1>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </main>
  );
}
