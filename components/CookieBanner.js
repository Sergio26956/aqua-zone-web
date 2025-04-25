import React, { useState } from "react";

export default function CookiesBanner() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 flex justify-between items-center">
      <p>Este sitio utiliza cookies para mejorar tu experiencia.</p>
      <div className="flex space-x-2">
        <button
          onClick={() => setShow(false)}
          className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 text-sm"
        >
          Aceptar
        </button>
        <button
          onClick={() => alert('Configuración de cookies')}
          className="bg-gray-500 px-4 py-2 rounded hover:bg-gray-600 text-sm"
        >
          Configuración
        </button>
      </div>
    </div>
  );
}
