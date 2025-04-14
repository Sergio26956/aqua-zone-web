import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Sections.module.css';

export default function Terrestres() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Parques Acuáticos Terrestres | Aquazone Waterpark</title>
        <meta name="description" content="Descubre los mejores parques acuáticos terrestres en Aquazone Waterpark. Diversión garantizada para toda la familia." />
      </Head>

      <header className={styles.header}>
        <h1>Parques Acuáticos Terrestres</h1>
        <p>¡Explora nuestras increíbles atracciones terrestres y vive la mejor experiencia acuática!</p>
      </header>

      <main className={styles.main}>
        {/* Lista de atracciones */}
        <section className={styles.attractions}>
          <div className={styles.attractionCard}>
            <h3>Río Lento</h3>
            <p>Relájate mientras flotas por un río tranquilo rodeado de naturaleza.</p>
          </div>
          <div className={styles.attractionCard}>
            <h3>Toboganes Gigantes</h3>
            <p>Desciende a toda velocidad por nuestros toboganes más altos y emocionantes.</p>
          </div>
        </section>

        {/* Enlace para volver */}
        <Link href="/">
          <a className={styles.backButton}>Volver al Inicio</a>
        </Link>
      </main>
    </div>
  );
}
