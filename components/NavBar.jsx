import React from "react";

export default function NavBar() {
  return (
    <nav className="bg-blue-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">AQUA-ZONE</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:underline">Inicio</a>
          </li>
          <li>
            <a href="/admin" className="hover:underline">Admin</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
