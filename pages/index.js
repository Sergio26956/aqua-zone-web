import React from 'react';
import Navbar from './Navbar';
import './globals.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <header style={styles.header}>
        <h1 style={styles.title}>Bienvenido a AquaZone</h1>
        <p style={styles.subtitle}>Explora lo mejor del mundo acuático con un diseño que te dejará sin palabras.</p>
        <button style={styles.ctaButton}>Explorar Ahora</button>
      </header>
    </div>
  );
};

const styles = {
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundImage: 'url("https://source.unsplash.com/1600x900/?water,blue")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
  },
  ctaButton: {
    ...globals.button,
  },
};

export default App;
