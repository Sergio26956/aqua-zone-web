import React from 'react';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <h3>¡Síguenos en redes sociales!</h3>
        <div className={styles.socialIcons}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/facebook.svg" alt="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/instagram.svg" alt="Instagram" />
          </a>
          <a href="https://wa.me/34649002658" target="_blank" rel="noopener noreferrer">
            <img src="/icons/whatsapp.svg" alt="WhatsApp" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/tiktok.svg" alt="TikTok" />
          </a>
        </div>
      </div>

      <div className={styles.contact}>
        <h3>Contáctanos</h3>
        <form className={styles.contactForm}>
          <input type="text" placeholder="Tu nombre" required />
          <input type="email" placeholder="Tu correo" required />
          <textarea placeholder="Tu mensaje" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>

      <div className={styles.copyright}>
        © 2025 AQUAZONE WATERPARK. Todos los derechos reservados.
      </div>
    </footer>
  );
}
