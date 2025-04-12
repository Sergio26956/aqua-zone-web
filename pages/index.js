import Link from "next/link";
import VideoBackground from "../components/VideoBackground";
import ThemeToggle from "../components/ThemeToggle";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Video de Fondo */}
      <VideoBackground />

      {/* Controles de Tema e Idioma */}
      <div className="absolute top-4 right-4 flex space-x-4">
        <ThemeToggle />
        <LanguageSwitcher />
      </div>

      {/* Contenido Principal */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-5xl font-bold text-white mb-10 drop-shadow-lg">
          Bienvenido a AQUAZONE
        </h1>
        <div className="flex space-x-8">
          {/* Botón para Parques Acuáticos Terrestres */}
          <Link href="/terrestres">
            <a className="bg-blue-600 text-white rounded-lg px-6 py-3 shadow-lg hover:bg-blue-700 transition duration-300">
              PARQUES ACUÁTICOS TERRESTRES
            </a>
          </Link>
          {/* Botón para Parques Acuáticos Flotantes */}
          <Link href="/flotantes">
            <a className="bg-blue-600 text-white rounded-lg px-6 py-3 shadow-lg hover:bg-blue-700 transition duration-300">
              PARQUES ACUÁTICOS FLOTANTES
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
