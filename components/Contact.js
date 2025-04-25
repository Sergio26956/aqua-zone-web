export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-blue-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-600">Contáctanos</h2>
        <form className="mt-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Nombre</label>
            <input id="name" type="text" className="w-full px-4 py-2 border rounded-md" placeholder="Tu nombre" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Correo Electrónico</label>
            <input id="email" type="email" className="w-full px-4 py-2 border rounded-md" placeholder="Tu email" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">Mensaje</label>
            <textarea id="message" rows="4" className="w-full px-4 py-2 border rounded-md" placeholder="Tu mensaje" required></textarea>
          </div>
          <button type="submit" className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">Enviar</button>
        </form>
      </div>
    </section>
  );
}
