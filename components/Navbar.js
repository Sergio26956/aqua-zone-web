export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white py-4 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Aqua Zone</h1>
        <ul className="flex space-x-6">
          <li><a href="#hero" className="hover:underline">Inicio</a></li>
          <li><a href="#attractions" className="hover:underline">Atracciones</a></li>
          <li><a href="#contact" className="hover:underline">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}
