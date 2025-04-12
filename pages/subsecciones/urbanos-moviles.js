import React from "react";

export default function UrbanosMoviles() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Encabezado */}
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Parque Acuático Urbano Móvil
      </h1>
      {/* Texto Explicativo */}
      <p className="text-lg text-gray-700 mb-6">
        Nuestro Parque Acuático Urbano Móvil está diseñado para llevar la
        diversión acuática a cualquier lugar. Perfecto para eventos urbanos,
        fiestas privadas y celebraciones en espacios reducidos, sin comprometer
        la emoción y seguridad que nos caracteriza.
      </p>
      {/* Sección de Videos */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Video de Ejemplo
        </h2>
        <video
          controls
          className="w-full rounded-lg shadow-lg"
          src="/videos/ejemplo-urbano.mp4"
          alt="Video ejemplo de Parque Acuático Urbano Móvil"
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
            src="/images/urbano1.jpg"
            alt="Imagen 1 de Parque Acuático Urbano Móvil"
            className="rounded-lg shadow-lg"
          />
          <img
            src="/images/urbano2.jpg"
            alt="Imagen 2 de Parque Acuático Urbano Móvil"
            className="rounded-lg shadow-lg"
          />
          <img
            src="/images/urbano3.jpg"
            alt="Imagen 3 de Parque Acuático Urbano Móvil"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
