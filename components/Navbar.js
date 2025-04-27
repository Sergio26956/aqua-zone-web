import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <a className="text-2xl font-bold text-blue-500 dark:text-blue-300">
                AQUAZONE
              </a>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-4">
            <Link href="/about">
              <a className="hover:text-blue-500">Sobre Nosotros</a>
            </Link>
            <Link href="/services">
              <a className="hover:text-blue-500">Servicios</a>
            </Link>
            <Link href="/contact">
              <a className="hover:text-blue-500">Contacto</a>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Open Menu"
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-2 space-y-2 bg-white dark:bg-gray-900">
          <Link href="/about">
            <a onClick={() => setIsMenuOpen(false)}>Sobre Nosotros</a>
          </Link>
          <Link href="/services">
            <a onClick={() => setIsMenuOpen(false)}>Servicios</a>
          </Link>
          <Link href="/contact">
            <a onClick={() => setIsMenuOpen(false)}>Contacto</a>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
