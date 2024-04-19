import React from 'react';
export default function RootLayout({ children }) {
  return (
    <>
      <main>{children}</main>
      <aside>This is the about page!</aside>
    </>
  );
}
