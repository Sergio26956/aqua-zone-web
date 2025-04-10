import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div>
      <NavBar />
      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Contacto</h1>
        <form>
          <div className="mb-4">
            <label className="block mb-2">Nombre</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Mensaje</label>
            <textarea
              className="w-full p-2 border rounded"
              rows="5"
              required
            ></textarea>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Enviar
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
