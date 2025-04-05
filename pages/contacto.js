import ContactForm from "../components/ContactForm";

export default function Contacto() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Contacto</h1>
      <div className="max-w-2xl mx-auto">
        <ContactForm />
      </div>
    </div>
  );
}
