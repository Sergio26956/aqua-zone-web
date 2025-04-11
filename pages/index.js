import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  const sections = [
    {
      title: "Parques Terrestres",
      description: "Vive la aventura en tierra firme con nuestras atracciones emocionantes.",
      image: "/images/terrestre.jpg",
    },
    {
      title: "Parques Flotantes",
      description: "Explora nuestras increíbles estructuras flotantes en playas y piscinas.",
      image: "/images/flotante.jpg",
    },
  ];

  return (
    <div className="bg-gray-100">
      <NavBar />
      {/* Hero Section */}
      <header className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold text-white mb-4">AQUAZONE</h1>
          <p className="text-xl text-white mb-6">
            ¡Descubre la magia de nuestros parques acuáticos terrestres y flotantes!
          </p>
          <a
            href="#main-content"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Explorar
          </a>
        </div>
      </header>
      {/* Main Content */}
      <main id="main-content" className="container mx-auto p-8">
        {sections.map((section, index) => (
          <div key={index} className="my-12 flex flex-col md:flex-row items-center">
            <img src={section.image} alt={section.title} className="w-full md:w-1/2 rounded-lg shadow-lg" />
            <div className="md:ml-8 mt-4 md:mt-0">
              <h2 className="text-3xl font-bold text-blue-800">{section.title}</h2>
              <p className="text-lg text-gray-700 mt-2">{section.description}</p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
              >
                Más información →
              </a>
            </div>
          </div>
        ))}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
