import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css';

const DynamicLogo = dynamic(() => import('../components/AnimatedLogo'), { ssr: false });

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aquazone Waterpark</title>
        <meta name="description" content="¡Bienvenido a Aquazone Waterpark! Disfruta de los mejores parques acuáticos con una experiencia visual inmersiva." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Logo con Animación */}
        <DynamicLogo />

        {/* Botones para secciones principales */}
        <div className={styles.buttons}>
          <a href="/terrestres" className={styles.sectionButton}>
            Parques Acuáticos Terrestres
          </a>
          <a href="/flotantes" className={styles.sectionButton}>
            Parques Acuáticos Flotantes
          </a>
        </div>
      </main>

      {/* Fondo animado */}
      <div className={styles.animatedBackground}></div>
    </div>
  );
}
