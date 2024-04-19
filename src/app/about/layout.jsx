import React from 'react';
import styles from './layout.module.css';
export default function RootLayout({ children }) {
  return (
    <>
      <main>{children}</main>
      <aside className={styles.about_aside}>This is the about page!</aside>
    </>
  );
}
