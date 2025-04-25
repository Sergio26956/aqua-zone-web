const attractions = [
  { title: 'Kamikaze Jump', description: 'Adrenalina pura en cada salto.', image: '/images/kamikaze.jpg' },
  { title: 'Piscinas de Olas', description: 'Relájate con el vaivén del agua.', image: '/images/piscinas.jpg' },
  { title: 'Toboganes Gigantes', description: 'Diversión interminable.', image: '/images/toboganes.jpg' },
];

export default function Attractions() {
  return (
    <section id="attractions" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-600">Atracciones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {attractions.map((attraction, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={attraction.image} alt={attraction.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-600">{attraction.title}</h3>
                <p className="text-gray-700 mt-2">{attraction.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
