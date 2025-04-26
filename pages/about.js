import Navbar from '../components/Navbar';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="px-6 py-12">
        <h1 className="text-4xl font-bold mb-4 text-center">Sobre Nosotros</h1>
        <p className="text-lg text-gray-700 text-center">
          Bienvenido a Aqua Zone, el parque acuático más avanzado del mundo. Nuestra misión
          es ofrecerte una experiencia inolvidable con tecnología de vanguardia y diversión asegurada.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <Image src="/images/about_1.jpg" alt="Parque Acuático" width={300} height={200} />
          <Image src="/images/about_2.jpg" alt="Aventura" width={300} height={200} />
          <Image src="/images/about_3.jpg" alt="Diversión" width={300} height={200} />
        </div>
      </main>
    </>
  );
}
