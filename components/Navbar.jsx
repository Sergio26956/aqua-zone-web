import React from 'react';
import './globals.css';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>AquaZone</div>
      <ul style={styles.navLinks}>
        <li><a href="#home" style={styles.link}>Inicio</a></li>
        <li><a href="#about" style={styles.link}>Acerca de</a></li>
        <li><a href="#services" style={styles.link}>Servicios</a></li>
        <li><a href="#contact" style={styles.link}>Contacto</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    position: 'fixed',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1000,
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: '900',
    color: '#fff',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s ease',
  },
};

export default Navbar;
