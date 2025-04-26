import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Sections.module.css';

export default function Piscinas() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Piscinas | Aqua Zone</title>
        <meta name="description" content="Disfruta de nuestras piscinas de última generación en Aqua Zone." />
      </Head>

      <header className={styles.header}>
        <h1>Piscinas</h1>
        <p>¡Relájate y disfruta en nuestras increíbles piscinas!</p>
      </header>

      <main className={styles.main}>
        <section className={styles.attractionDetails}>
          <img src="/images/piscinas.jpg" alt="Piscinas" className={styles.attractionImage} />
          <div className={styles.textContent}>
            <h3>Un Oasis de Diversión</h3>
            <p>
              Sumérgete en un mundo de relajación y diversión en nuestras piscinas de diseño único. 
              Perfecto para familias y aventureros.
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
