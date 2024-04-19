'use client';
import React, { useState } from 'react';

export default function Home() {
  const [colours, setColours] = useState({
    red: 0,
    green: 0,
    blue: 0,
  });
  return (
    <main>
      <h1>Colours</h1>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: `rgb(${colours.red}, ${colours.green}, ${colours.blue})`,
        }}
      ></div>
      <button
        onClick={() => {
          setColours({
            red: Math.floor(Math.random() * 256),
            green: Math.floor(Math.random() * 256),
            blue: Math.floor(Math.random() * 256),
          });
        }}
      >
        Change!
      </button>
    </main>
  );
}
