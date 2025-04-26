import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Attractions from '../components/Attractions';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SocialButtons from '../components/SocialButtons';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Head>
        <title>Aqua Zone - Innovación y Diversión</title>
        <meta name="description" content="El parque acuático más avanzado del mundo." />
        <meta name="keywords" content="parque acuático, innovación, diversión, tecnología" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Hero />
      </motion.div>
      <Attractions />
      <Contact />
      <Footer />
      <SocialButtons />
    </>
  );
}
