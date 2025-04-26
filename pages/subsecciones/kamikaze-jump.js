import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Sections.module.css';

export default function KamikazeJump() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kamikaze Jump | Aqua Zone</title>
        <meta name="description" content="Atrévete a experimentar la adrenalina del Kamikaze Jump en Aqua Zone." />
      </Head>

      <header className={styles.header}>
        <h1>Kamikaze Jump</h1>
        <p>¡La atracción más extrema para los amantes de la adrenalina!</p>
      </header>

      <main className={styles.main}>
        <section className={styles.attractionDetails}>
          <img src="/images/kamikaze.jpg" alt="Kamikaze Jump" className={styles.attractionImage} />
          <div className={styles.textContent}>
            <h3>Adrenalina Extrema</h3>
            <p>
              Desciende desde una altura impresionante y siente la emoción como nunca antes. 
              ¡Atrévete a vivir la experiencia del Kamikaze Jump!
            </p>
          </div>
        </section>

        <Link href="/subsecciones">
          <a className={styles.backButton}>Volver a Atracciones</a>
        </Link>
      </main>
    </div>
  );
}
