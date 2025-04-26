import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import PropTypes from 'prop-types';

const AnimatedLogo = ({
  imageUrl = '/images/logo.webp',
  altText = 'Logo Animado',
  config = {},
  theme = 'auto', // Nuevo: Soporte para temas (auto, light, dark)
}) => {
  const logoRef = useRef(null);

  // Configuración predeterminada de animación
  const defaultConfig = {
    opacity: 0,
    scale: 0.5,
    rotation: 360,
    duration: 2,
    ease: 'power4.out',
    hoverScale: 1.1, // Nuevo: Escala en hover
    ...config, // Permite sobreescribir valores predeterminados
  };

  // Determinar tema (oscuro o claro)
  const getThemeBackground = () => {
    if (theme === 'auto') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900'
        : 'bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500';
    }
    return theme === 'dark'
      ? 'bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900'
      : 'bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500';
  };

  useEffect(() => {
    // Animación inicial
    gsap.fromTo(
      logoRef.current,
      { opacity: defaultConfig.opacity, scale: defaultConfig.scale },
      {
        opacity: 1,
        scale: 1,
        rotation: defaultConfig.rotation,
        duration: defaultConfig.duration,
        ease: defaultConfig.ease,
      }
    );

    // Añadir efecto de hover dinámico
    const logoElement = logoRef.current;
    const handleMouseEnter = () => {
      gsap.to(logoElement, {
        scale: defaultConfig.hoverScale,
        duration: 0.3,
        ease: 'power2.out',
      });
    };
    const handleMouseLeave = () => {
      gsap.to(logoElement, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    logoElement.addEventListener('mouseenter', handleMouseEnter);
    logoElement.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup de eventos
    return () => {
      logoElement.removeEventListener('mouseenter', handleMouseEnter);
      logoElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [defaultConfig]);

  return (
    <div className={`flex justify-center items-center h-screen ${getThemeBackground()}`}>
      <div
        ref={logoRef}
        className="relative w-64 h-32 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-500"
        style={{ perspective: '1000px' }}
      >
        {/* Lazy-loading para optimizar rendimiento */}
        <img
          src={imageUrl}
          alt={altText}
          className="w-full h-full object-contain"
          loading="lazy" // Nuevo: Lazy-loading
        />
      </div>
    </div>
  );
};

AnimatedLogo.propTypes = {
  imageUrl: PropTypes.string, // URL dinámica para el logo
  altText: PropTypes.string, // Texto alternativo para accesibilidad y SEO
  config: PropTypes.object, // Configuración de la animación
  theme: PropTypes.oneOf(['auto', 'light', 'dark']), // Nuevo: Tema del fondo
};

export default AnimatedLogo;
