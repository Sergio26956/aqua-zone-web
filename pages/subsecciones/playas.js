import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Sections.module.css';

export default function Playas() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Playas Flotantes | Aqua Zone</title>
        <meta name="description" content="Relájate en nuestras playas flotantes, únicas en Aqua Zone." />
      </Head>

      <header className={styles.header}>
        <h1>Playas Flotantes</h1>
        <p>¡Vive la experiencia única de disfrutar de playas sobre el agua!</p>
      </header>

      <main className={styles.main}>
        <section className={styles.attractionDetails}>
          <div className={styles.textContent}>
            <h3>Relájate en la Playa</h3>
            <p>
              Nuestras playas flotantes ofrecen un espacio perfecto para relajarse, tomar el sol y disfrutar del sonido del agua. 
              Perfecto para familias y amigos.
            </p>
          </div>
          <img src="/images/playas.jpg" alt="Playas Flotantes" className={styles.attractionImage} />
        </section>

        <section className={styles.activityList}>
          <h3>Actividades Disponibles:</h3>
          <ul>
            <li><strong>Alquiler de tumbonas</strong>: Relájate con estilo sobre el agua.</li>
            <li><strong>Snorkel</strong>: Explora el mundo acuático bajo las plataformas.</li>
            <li><strong>Deportes Acuáticos</strong>: Desde kayak hasta paddleboard.</li>
          </ul>
        </section>

        <Link href="/subsecciones">
          <a className={styles.backButton}>Volver a Atracciones</a>
        </Link>
      </main>
    </div>
  );
}
