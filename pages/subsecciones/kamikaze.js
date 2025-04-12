export default function Kamikaze() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Kamikaze Jump
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Vive la emoción del Kamikaze Jump, una atracción única diseñada para los más valientes. ¡Atrévete a saltar desde alturas increíbles y sentir la adrenalina al máximo!
      </p>
      {/* Video Embebido */}
      <div className="aspect-w-16 aspect-h-9 mb-6">
        <iframe
          src="https://www.youtube.com/embed/0ELhclay1m4"
          title="Kamikaze Jump"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg shadow-lg"
        ></iframe>
      </div>
      {/* Galería de Imágenes */}
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Galería</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <img
          src="/images/kamikaze.jpg"
          alt="Kamikaze Jump"
          className="w-full h-auto rounded-lg shadow-lg"
        />
        <img
          src="/images/kamikaze2.jpg"
          alt="Kamikaze Jump"
          className="w-full h-auto rounded-lg shadow-lg"
        />
        <img
          src="/images/kamikaze3.jpg"
          alt="Kamikaze Jump"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
