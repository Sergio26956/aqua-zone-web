import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <div className="container mx-auto p-8 text-center">
        <a href="/terrestres">
          <button className="bg-blue-500 text-white px-8 py-4 rounded-lg mr-4 hover:bg-blue-600">
            Parques Terrestres
          </button>
        </a>
        <a href="/flotantes">
          <button className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600">
            Parques Flotantes
          </button>
        </a>
      </div>
      <WhatsAppButton />
    </div>
  );
}
