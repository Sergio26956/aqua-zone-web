export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-4 right-4">
      <a
        href="https://wa.me/34649002658?text=¡Hola!%20Me%20encantaría%20obtener%20más%20información%20sobre%20AQUAZONE."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
        title="Contáctanos por WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.847.744 5.601 2.152 8.037L.102 31.155a.749.749 0 0 0 .943.943l7.118-2.05A15.914 15.914 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm8.765 23.405c-.365 1.03-2.142 1.947-2.932 1.997-.748.048-1.621.348-5.505-1.165-4.63-1.834-7.561-6.4-7.8-6.696-.242-.297-1.86-2.48-1.86-4.73 0-2.25 1.162-3.364 1.57-3.823.397-.459.867-.573 1.157-.573.29 0 .579.003.835.015.27.013.632-.1.993.758.365.874 1.244 3.035 1.352 3.256.11.22.182.481.033.779-.148.297-.222.48-.446.733-.223.254-.47.57-.67.762-.223.212-.455.442-.196.867.26.426 1.16 1.917 2.482 3.103 1.707 1.525 3.14 2.002 3.566 2.189.446.188.704.16.967-.099.26-.26 1.12-1.222 1.418-1.645.297-.42.595-.348.993-.21.397.136 2.51 1.184 2.938 1.402.426.22.733.31.844.482.11.172.11 1.006-.255 2.036z" />
        </svg>
      </a>
    </div>
  );
}
