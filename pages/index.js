import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <div className="relative h-screen overflow-x-hidden">
      {/* Otros componentes como el fondo de video, logo y redes sociales */}
      <div className="absolute bottom-0 w-full bg-gray-100 py-10">
        <ContactForm />
      </div>
    </div>
  );
}
