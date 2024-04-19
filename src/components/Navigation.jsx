import React from 'react';
import styles from './Navigation.module.css';
// Don't mix this up with the MUI Link unless you inject the NextJS Link functionality therein via theming, etc.
import Link from 'next/link';
const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/about/me'>About Me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
