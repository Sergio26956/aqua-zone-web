import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
      <NavBar />
      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Quiénes Somos</h1>
        <p className="text-lg text-gray-700 mt-4">
          En AQUA-ZONE, nos especializamos en ofrecer experiencias únicas en parques terrestres y flotantes. Nuestro objetivo es brindar diversión, seguridad y momentos inolvidables para todos nuestros visitantes.
        </p>
      </main>
      <Footer />
    </div>
  );
}
