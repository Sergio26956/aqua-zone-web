import Link from 'next/link';
import styles from '../styles/NavBar.module.css';

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li>
          <Link href="/">
            <a>Inicio</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Sobre Nosotros</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contacto</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
