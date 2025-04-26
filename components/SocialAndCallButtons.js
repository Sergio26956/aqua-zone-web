import React from 'react';

const SocialAndCallButtons = () => {
  return (
    <div style={styles.container}>
      <button style={styles.button}>
        <i className="fab fa-facebook"></i> Facebook
      </button>
      <button style={styles.button}>
        <i className="fab fa-instagram"></i> Instagram
      </button>
      <button style={styles.button}>
        <i className="fas fa-phone"></i> Llamar
      </button>
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
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    margin: '0 10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
};

export default SocialAndCallButtons;
