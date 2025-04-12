import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-blue-600 mb-10">
        Bienvenido a AQUAZONE
      </h1>
      <div className="flex space-x-8">
        {/* Botón para Parques Acuáticos Terrestres */}
        <Link href="/terrestres">
          <a className="relative group">
            <div
              className="w-72 h-48 bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage: "url('/images/terrestre.jpg')",
              }}
            >
              <div className="absolute inset-0 bg-blue-600 bg-opacity-50 flex items-center justify-center rounded-lg group-hover:bg-opacity-70 transition duration-300">
                <span className="text-white text-2xl font-bold">
                  Parques Acuáticos Terrestres
                </span>
              </div>
            </div>
          </a>
        </Link>
        {/* Botón para Parques Acuáticos Flotantes */}
        <Link href="/flotantes">
          <a className="relative group">
            <div
              className="w-72 h-48 bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage: "url('/images/flotante.jpg')",
              }}
            >
              <div className="absolute inset-0 bg-blue-600 bg-opacity-50 flex items-center justify-center rounded-lg group-hover:bg-opacity-70 transition duration-300">
                <span className="text-white text-2xl font-bold">
                  Parques Acuáticos Flotantes
                </span>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
