import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Sections.module.css';

export default function Flotantes() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Parques Acuáticos Flotantes | Aquazone Waterpark</title>
        <meta name="description" content="Descubre los parques acuáticos flotantes más impresionantes en Aquazone Waterpark. Atracciones únicas sobre el agua." />
      </Head>

      <header className={styles.header}>
        <h1>Parques Acuáticos Flotantes</h1>
        <p>¡Vive la aventura sobre el agua con nuestras atracciones flotantes únicas!</p>
      </header>

      <main className={styles.main}>
        {/* Lista de atracciones */}
        <section className={styles.attractions}>
          <div className={styles.attractionCard}>
            <h3>Castillos Inflables</h3>
            <p>Siente la diversión rebotando sobre el agua en nuestros castillos inflables gigantes.</p>
          </div>
          <div className={styles.attractionCard}>
            <h3>Circuitos de Obstáculos</h3>
            <p>Desafía a tus amigos en nuestros emocionantes circuitos de obstáculos flotantes.</p>
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
