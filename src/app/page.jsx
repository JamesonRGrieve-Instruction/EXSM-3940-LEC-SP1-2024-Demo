import React from 'react';
import CryptoPriceTicker from '../components/CryptoPriceTicker';
import styles from './page.module.css';
export default function Home() {
  return (
    <main className={styles.main}>
      <CryptoPriceTicker assetName='bitcoin' />
    </main>
  );
}
