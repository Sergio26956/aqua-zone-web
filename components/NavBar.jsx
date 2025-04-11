import React from "react";

export default function NavBar() {
  return (
    <nav className="bg-blue-800 text-white p-4 fixed top-0 w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">AQUAZONE</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="hover:underline">Inicio</a>
          </li>
          <li>
            <a href="/about" className="hover:underline">Quiénes Somos</a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
