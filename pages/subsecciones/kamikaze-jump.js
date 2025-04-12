import React from "react";

export default function KamikazeJump() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Encabezado */}
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Kamikaze Jump</h1>
      {/* Texto Explicativo */}
      <p className="text-lg text-gray-700 mb-6">
        Experimenta la adrenalina al máximo con nuestro Kamikaze Jump, una
        atracción única que desafía los límites de la diversión acuática.
      </p>
      {/* Sección de Videos */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Video de Ejemplo
        </h2>
        <video
          controls
          className="w-full rounded-lg shadow-lg"
          src="/videos/ejemplo-kamikaze.mp4"
          alt="Video ejemplo de Kamikaze Jump"
        >
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
      {/* Galería de Imágenes */}
      <div>
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Galería de Imágenes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img
            src="/images/kamikaze1.jpg"
            alt="Imagen 1 de Kamikaze Jump"
            className="rounded-lg shadow-lg"
          />
          <img
            src="/images/kamikaze2.jpg"
            alt="Imagen 2 de Kamikaze Jump"
            className="rounded-lg shadow-lg"
          />
          <img
            src="/images/kamikaze3.jpg"
            alt="Imagen 3 de Kamikaze Jump"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
