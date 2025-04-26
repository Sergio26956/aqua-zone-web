import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Sections.module.css';

export default function Urbano5Actividades() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Parque Acuático Urbano - 5 Actividades | Aqua Zone</title>
        <meta name="description" content="Explora el Parque Acuático Urbano con 5 emocionantes actividades en Aqua Zone." />
      </Head>

      <header className={styles.header}>
        <h1>Parque Acuático Urbano</h1>
        <p>¡Descubre 5 actividades emocionantes en un entorno urbano incomparable!</p>
      </header>

      <main className={styles.main}>
        <section className={styles.attractionDetails}>
          <div className={styles.activityList}>
            <h3>Actividades Destacadas:</h3>
            <ul>
              <li><strong>1. Pista de Surf</strong>: Domina las olas en nuestra increíble pista de surf artificial.</li>
              <li><strong>2. Toboganes Urbanos</strong>: Experimenta la adrenalina en toboganes únicos en la ciudad.</li>
              <li><strong>3. Piscinas de Olas</strong>: Relájate y siente las olas como si estuvieras en la playa.</li>
              <li><strong>4. Juegos Interactivos</strong>: Actividades acuáticas para niños y adultos.</li>
              <li><strong>5. Zona de Comida</strong>: Disfruta de snacks y bebidas mientras te diviertes.</li>
            </ul>
          </div>
          <img src="/images/urbano.jpg" alt="Parque Urbano" className={styles.attractionImage} />
        </section>

        <Link href="/subsecciones">
          <a className={styles.backButton}>Volver a Atracciones</a>
        </Link>
      </main>
    </div>
  );
}
