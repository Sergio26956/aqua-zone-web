import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  const sections = [
    {
      title: "Parques Terrestres",
      items: [
        {
          name: "KAMIKAZE JUMP",
          description:
            "Vive la adrenalina con nuestros saltos Kamikaze, diseñados para los amantes de la emoción.",
        },
        {
          name: "PARQUE ACUÁTICO URBANO MÓVIL",
          description:
            "Disfruta de un parque acuático donde quieras, con nuestra experiencia móvil única.",
        },
      ],
    },
    {
      title: "Parques Flotantes",
      items: [
        {
          name: "Playas",
          description:
            "Relájate en nuestras playas flotantes diseñadas para disfrutar del sol y el agua como nunca antes.",
        },
        {
          name: "Piscinas",
          description:
            "Descubre nuestras piscinas flotantes ideales para refrescarte y relajarte.",
        },
      ],
    },
  ];

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
        {sections.map((section, index) => (
          <section key={index} className="mt-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">
              {section.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.items.map((item, i) => (
                <div
                  key={i}
                  className="bg-yellow-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-2xl font-bold text-blue-800">
                    {item.name}
                  </h3>
                  <p className="text-gray-700 mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
