import Navbar from '../components/Navbar';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../components/Map'), { ssr: false });

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="px-6 py-12">
        <h1 className="text-4xl font-bold mb-4 text-center">Contáctanos</h1>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700">Nombre</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Tu nombre"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Tu email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Mensaje</label>
            <textarea
              className="w-full px-3 py-2 border rounded-lg"
              rows="4"
              placeholder="Escribe tu mensaje"
            ></textarea>
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            Enviar
          </button>
        </form>
        <div className="mt-8">
          <Map />
        </div>
      </main>
    </>
  );
}
