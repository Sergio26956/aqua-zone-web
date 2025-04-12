export default function FlotantePiscinas() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Piscinas Flotantes
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Disfruta de nuestras piscinas flotantes, diseñadas para ofrecerte una experiencia única en el agua. Perfectas para todas las edades.
      </p>
      {/* Video Embebido */}
      <div className="aspect-w-16 aspect-h-9 mb-6">
        <iframe
          src="https://www.youtube.com/embed/0ELhclay1m4"
          title="Piscinas Flotantes"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>
  );
}
