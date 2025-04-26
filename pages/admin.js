import { useState } from "react";

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true); // Simulación de autenticación
  };

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Iniciar Sesión</h1>
        <button
          onClick={handleLogin}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Acceder al Panel de Administración
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Panel de Administración</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Usuarios</h3>
          <p className="text-gray-600">Gestión de usuarios registrados.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Reportes</h3>
          <p className="text-gray-600">Consulta reportes de rendimiento.</p>
        </div>
      </div>
    </div>
  );
}
