import { useState } from 'react';
import Link from 'next/link';
import { FaMoon, FaSun } from 'react-icons/fa';
import styles from '../styles/NavBar.module.css'; // Importa el archivo CSS modular

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className={`${styles.navbar} bg-white dark:bg-gray-900 shadow-md fixed w-full z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <a className={styles.logo}>Aqua Zone</a>
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="/about">
              <a className={styles.link}>Sobre Nosotros</a>
            </Link>
            <Link href="/services">
              <a className={styles.link}>Servicios</a>
            </Link>
            <Link href="/contact">
              <a className={styles.link}>Contacto</a>
            </Link>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
          <div className="px-4 py-2 space-y-2">
            <Link href="/about">
              <a className={styles.mobileLink}>Sobre Nosotros</a>
            </Link>
            <Link href="/services">
              <a className={styles.mobileLink}>Servicios</a>
            </Link>
            <Link href="/contact">
              <a className={styles.mobileLink}>Contacto</a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
