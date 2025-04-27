import { FaFacebookF, FaInstagram, FaWhatsapp, FaTwitter } from 'react-icons/fa';

export default function SocialButtons() {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-3">
      <a
        href="https://www.facebook.com/share/18ZGYW6vqA/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 p-4 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-110"
        aria-label="Compartir en Facebook"
      >
        <FaFacebookF className="text-white" size={20} />
      </a>
      <a
        href="https://www.instagram.com/aquazone_waterpark"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-4 rounded-full shadow-lg hover:scale-110"
        aria-label="Visitar Instagram"
      >
        <FaInstagram className="text-white" size={20} />
      </a>
      <a
        href="https://twitter.com/share?text=Ven+a+Aqua+Zone!&url=https://aquazone.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-400 p-4 rounded-full shadow-lg hover:bg-blue-500 transition-transform transform hover:scale-110"
        aria-label="Compartir en Twitter"
      >
        <FaTwitter className="text-white" size={20} />
      </a>
      <a
        href="https://wa.me/34649002658"
        className="bg-green-600 p-4 rounded-full shadow-lg hover:bg-green-700 transition-transform transform hover:scale-110"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp className="text-white" size={20} />
      </a>
    </div>
  );
}
