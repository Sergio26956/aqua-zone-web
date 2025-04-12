import React from "react";

export default function Piscinas() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Encabezado */}
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Piscinas</h1>
      {/* Texto Explicativo */}
      <p className="text-lg text-gray-700 mb-6">
        Disfruta de nuestras piscinas flotantes diseñadas para ofrecer una
        experiencia refrescante y segura en cualquier ambiente.
      </p>
      {/* Sección de Videos */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Video de Ejemplo
        </h2>
        <video
          controls
          className="w-full rounded-lg shadow-lg"
          src="/videos/ejemplo-piscinas.mp4"
          alt="Video ejemplo de piscinas flotantes"
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
            src="/images/piscinas1.jpg"
            alt="Imagen 1 de piscinas flotantes"
            className="rounded-lg shadow-lg"
          />
          <img
            src="/images/piscinas2.jpg"
            alt="Imagen 2 de piscinas flotantes"
            className="rounded-lg shadow-lg"
          />
          <img
            src="/images/piscinas3.jpg"
            alt="Imagen 3 de piscinas flotantes"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
