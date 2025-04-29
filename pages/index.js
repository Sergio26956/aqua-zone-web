import Head from "next/head";
import VideoBackground from "../components/VideoBackground";
import AnimatedLogo from "../components/AnimatedLogo";
import SocialButtons from "../components/SocialButtons";
import SocialMediaBar from "../components/SocialMediaBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Head>
        <title>Aqua Zone - Innovación y Diseño</title>
        <meta
          name="description"
          content="Bienvenido a Aqua Zone, donde la innovación y el diseño crean experiencias inolvidables."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Fondo de video */}
      <VideoBackground />

      {/* Sección Hero */}
      <Hero />

      {/* Botones flotantes y barra de redes sociales */}
      <SocialButtons />
      <SocialMediaBar />

      {/* Pie de página */}
      <Footer />
    </div>
  );
}
