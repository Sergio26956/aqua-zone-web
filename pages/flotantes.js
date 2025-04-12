import Link from "next/link";

export default function Flotantes() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Parques Acuáticos Flotantes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Subsección Flotante Piscinas */}
        <Link href="/subsecciones/flotante-piscinas">
          <a className="relative group">
            <div
              className="w-full h-64 bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage: "url('/images/piscina.jpg')",
              }}
            >
              <div className="absolute inset-0 bg-blue-600 bg-opacity-50 flex items-center justify-center rounded-lg group-hover:bg-opacity-70 transition duration-300">
                <span className="text-white text-2xl font-bold">Piscinas</span>
              </div>
            </div>
          </a>
        </Link>
        {/* Subsección Flotante Playas */}
        <Link href="/subsecciones/flotante-playas">
          <a className="relative group">
            <div
              className="w-full h-64 bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage: "url('/images/playa.jpg')",
              }}
            >
              <div className="absolute inset-0 bg-blue-600 bg-opacity-50 flex items-center justify-center rounded-lg group-hover:bg-opacity-70 transition duration-300">
                <span className="text-white text-2xl font-bold">Playas</span>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
