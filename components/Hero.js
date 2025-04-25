export default function Hero() {
  return (
    <section id="hero" className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero.jpg)' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <h1 className="text-white text-6xl font-bold">¡Bienvenidos a Aqua Zone!</h1>
        <p className="text-white text-xl mt-4">El parque acuático más avanzado del mundo.</p>
        <a href="#attractions" className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700">Descubre Más</a>
      </div>
    </section>
  );
}
