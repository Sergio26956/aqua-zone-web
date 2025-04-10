import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main className="container mx-auto p-8">
        {/* Hero Section */}
        <section className="mt-12 text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-6">
            ¡Bienvenido a AQUA-ZONE!
          </h1>
          <p className="text-lg text-gray-700 mt-4">
            Explora los parques más increíbles y vive aventuras inolvidables.
          </p>
        </section>

        {/* Parques Terrestres */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Parques Terrestres</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-800">KAMIKAZE JUMP</h3>
              <p className="text-gray-700 mt-2">
                Vive la adrenalina con nuestros saltos Kamikaze, diseñados para los amantes de la emoción.
              </p>
            </div>
            <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-800">PARQUE ACUÁTICO URBANO MÓVIL</h3>
              <p className="text-gray-700 mt-2">
                Disfruta de un parque acuático donde quieras, con nuestra experiencia móvil única.
              </p>
            </div>
          </div>
        </section>

        {/* Parques Flotantes */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Parques Flotantes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-800">Playas</h3>
              <p className="text-gray-700 mt-2">
                Relájate en nuestras playas flotantes diseñadas para disfrutar del sol y el agua como nunca antes.
              </p>
            </div>
            <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-800">Piscinas</h3>
              <p className="text-gray-700 mt-2">
                Descubre nuestras piscinas flotantes ideales para refrescarte y relajarte.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
