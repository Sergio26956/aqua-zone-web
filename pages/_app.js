import "../styles/globals.css";
import WhatsAppButton from "../components/WhatsAppButton";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      {/* Botón Flotante de WhatsApp */}
      <WhatsAppButton />
    </>
  );
}

export default MyApp;
