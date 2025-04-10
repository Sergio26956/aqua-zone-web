export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">AQUA-ZONE</h1>
        <div className="hidden md:flex space-x-6">
          <a href="/terrestres" className="text-white hover:text-blue-300">Terrestres</a>
          <a href="/flotantes" className="text-white hover:text-blue-300">Flotantes</a>
          <a href="/contacto" className="text-white hover:text-blue-300">Contacto</a>
        </div>
      </div>
    </nav>
  );
}
