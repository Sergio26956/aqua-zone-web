import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="mb-4">&copy; 2025 Aqua Zone. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.facebook.com/aquazone"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook de Aqua Zone"
            className="hover:text-gray-300"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/aquazone"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Aqua Zone"
            className="hover:text-gray-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://twitter.com/aquazone"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter de Aqua Zone"
            className="hover:text-gray-300"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 text-center mt-4 text-sm">
        <a href="/privacy-policy" className="hover:underline">
          Política de Privacidad
        </a>{' '}
        |{' '}
        <a href="/terms" className="hover:underline">
          Términos y Condiciones
        </a>{' '}
        |{' '}
        <a href="/contact" className="hover:underline">
          Contacto
        </a>
      </div>
    </footer>
  );
}
