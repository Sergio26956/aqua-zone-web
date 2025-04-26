import "../styles/globals.css";
import WhatsAppButton from "../components/WhatsAppButton";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#0070f3",
    secondary: "#00b4d8",
    background: "#f8f9fa",
    text: "#343a40",
  },
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag("config", "GA_TRACKING_ID", {
        page_path: url,
      });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      {/* Botón Flotante de WhatsApp */}
      <WhatsAppButton />
    </ThemeProvider>
  );
}

export default MyApp;
