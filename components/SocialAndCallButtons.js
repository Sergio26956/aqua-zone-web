export default function SocialAndCallButtons() {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-3">
      {/* Botón de Facebook */}
      <a
        href="https://www.facebook.com/share/18ZGYW6vqA/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128v-2.672c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.916c-1.504 0-1.794.715-1.794 1.763v2.313h3.588l-.467 3.622h-3.121V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
        </svg>
      </a>

      {/* Botón de Instagram */}
      <a
        href="https://www.instagram.com/aquazone_waterpark?igsh=dXMwc2ZxMGY0eHRv"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-full p-4 shadow-lg hover:opacity-90 transition duration-300 flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.328 3.608 1.303.975.975 1.241 2.243 1.303 3.609.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.328 2.633-1.303 3.608-.975.975-2.243 1.241-3.609 1.303-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.328-3.608-1.303-.975-.975-1.241-2.243-1.303-3.609C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.328-2.633 1.303-3.608C4.511 3.571 5.779 3.305 7.145 3.243 8.41 3.185 8.79 3.163 12 3.163M12 0C8.741 0 8.332.015 7.052.072 5.775.129 4.604.348 3.514 1.438.348 4.604.129 5.775.072 7.052.015 8.332 0 8.741 0 12s.015 3.668.072 4.948c.057 1.277.276 2.448 1.366 3.538.348.348.758.653 1.248.946.489.293.994.537 1.514.732 1.277.511 2.448.73 3.725.787 1.28.057 1.689.072 5.948.072s3.668-.015 4.948-.072c1.277-.057 2.448-.276 3.538-1.366.348-.348.653-.758.946-1.248.293-.489.537-.994.732-1.514.511-1.277.73-2.448.787-3.725.057-1.28.072-1.689.072-5.948s-.015-3.668-.072-4.948c-.057-1.277-.276-2.448-1.366-3.538-.348-.348-.758-.653-1.248-.946-.489-.293-.994-.537-1.514-.732-1.277-.511-2.448-.73-3.725-.787C15.668.015 15.259 0 12 0zm0 5.838c-3.407 0-6.162 2.755-6.162 6.162s2.755 6.162 6.162 6.162 6.162-2.755 6.162-6.162-2.755-6.162-6.162-6.162zm0 10.162c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm6.406-11.845a1.44 1.44 0 1 0 0-2.881 1.44 1.44 0 0 0 0 2.881z" />
        </svg>
      </a>

      {/* Botón de TikTok */}
      <a
        href="https://www.tiktok.com/@aquazone93?_t=ZN-8vSbiqhYT4A&_r=1&fbclid=IwZXh0bgNhZW0CMTEAAR5lYQnSdP__jdqtUDYIVzTSiMme6gI6T4SBToK5PVjKigdblv309WgS1NqmPg_aem_eJjnrdP9m_qH5aviiTvt1Q"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black text-white rounded-full p-4 shadow-lg hover:bg-gray-800 transition duration-300 flex items-center justify-center"
      >
        <span className="font-bold">TikTok</span>
      </a>

      {/* Botón de YouTube */}
      <a
        href="https://youtube.com/@alquevaproducciones9655?si=wEmEao4Jv2UNilJy"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-600 text-white rounded-full p-4 shadow-lg hover:bg-red-700 transition duration-300 flex items-center justify-center"
      >
        <span className="font-bold">YouTube</span>
      </a>

      {/* Botón de Contacto por Llamada */}
      <a
        href="tel:+34649002658"
        className="bg-green-600 text-white rounded-full p-4 shadow-lg hover:bg-green-700 transition duration-300 flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M3.654 3.325a16.013 16.013 0 0016.021 16.02c.8 0 1.573-.094 2.318-.275l.179-.043a2.25 2.25 0 001.839-2.521l-.536-3.33a2.25 2.25 0 00-2.24-1.91l-3.993.2a2.25 2.25 0 00-2.072 1.5l-.52 1.624a11.988 11.988 0 01-5.938-5.937l1.624-.52a2.25 2.25 0 001.5-2.072l.2-3.993a2.25 2.25 0 00-1.91-2.24l-3.33-.536a2.25 2.25 0 00-2.521 1.839l-.043.179c-.181.745-.275 1.518-.275 2.318z" />
        </svg>
      </a>
    </div>
  );
}
