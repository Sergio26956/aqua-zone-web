import Head from "next/head";
import VideoBackground from "../components/VideoBackground";
import AnimatedLogo from "../components/AnimatedLogo";
import SocialButtons from "../components/SocialButtons";
import SocialMediaBar from "../components/SocialMediaBar";

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden">
      <Head>
        <title>Aqua Zone - La experiencia más impresionante</title>
        <meta
          name="description"
          content="Bienvenido a Aqua Zone, donde la innovación y el diseño se encuentran para crear una experiencia inolvidable."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Fondo hiperrealista */}
      <VideoBackground />

      {/* Logo animado */}
      <AnimatedLogo
        imageUrl="/images/logo.webp"
        altText="Aqua Zone Logo"
        config={{ rotation: 270, duration: 3 }}
        theme="auto"
      />

      {/* Botones flotantes de redes sociales */}
      <SocialButtons />

      {/* Barra lateral de redes sociales */}
      <SocialMediaBar />
    </div>
  );
}
