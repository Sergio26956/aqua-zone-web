import Navbar from '../components/Navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="px-6 py-12">
        <h1 className="text-4xl font-bold mb-4">Sobre Nosotros</h1>
        <p className="text-lg text-gray-700">
          Bienvenido a Aqua Zone, el parque acuático más avanzado del mundo. Nuestra misión
          es ofrecerte una experiencia inolvidable con tecnología de vanguardia y diversión asegurada.
        </p>
      </main>
    </>
  );
}
