export default function SocialLinks() {
  return (
    <div className="fixed bottom-4 right-4 flex space-x-4">
      {/* Facebook Button */}
      <a
        href="https://www.facebook.com/share/18ZGYW6vqA/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128v-2.672c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.91[...]
        </svg>
      </a>
      {/* Instagram Button */}
      <a
        href="https://www.instagram.com/aquazone_waterpark?igsh=dXMwc2ZxMGY0eHRv"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-full p-4 shadow-lg hover:opacity-90 transition-transform transform hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.328 3.608 1.303.975.975 1.241 2.243 1.303 3.609.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.328 2.633-1.3[...]
        </svg>
      </a>
    </div>
  );
}
