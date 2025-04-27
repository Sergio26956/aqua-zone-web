import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/hero.jpg)' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
        <motion.h1
          className="text-white text-6xl font-bold"
          aria-label="Bienvenidos a Aqua Zone"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ¡Bienvenidos a Aqua Zone!
        </motion.h1>
        <motion.p
          className="text-white text-xl mt-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          El parque acuático más avanzado del mundo.
        </motion.p>
        <motion.a
          href="#attractions"
          className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-transform transform hover:scale-110"
          aria-label="Descubre más sobre Aqua Zone"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Descubre Más
        </motion.a>
      </div>
    </section>
  );
}
