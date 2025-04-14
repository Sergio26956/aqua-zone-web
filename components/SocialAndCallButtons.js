import React from 'react';
import './globals.css';

const SocialAndCallButtons = () => {
  return (
    <div style={styles.container}>
      <button style={styles.button}><i className="fab fa-facebook"></i> Facebook</button>
      <button style={styles.button}><i className="fab fa-instagram"></i> Instagram</button>
      <button style={styles.button}><i className="fas fa-phone"></i> Llamar</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0',
  },
  button: {
    ...globals.button,
    margin: '0 10px',
  },
};

export default SocialAndCallButtons;
