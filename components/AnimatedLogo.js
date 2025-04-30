import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import PropTypes from 'prop-types';

const AnimatedLogo = ({
  imageUrl = '/images/logo.webp',
  altText = 'Logo Animado',
  config = {},
  theme = 'auto',
}) => {
  const logoRef = useRef(null);

  const defaultConfig = {
    opacity: 0,
    scale: 0.5,
    rotation: 360,
    duration: 2,
    ease: 'power4.out',
    hoverScale: 1.1,
    ...config,
  };

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

    const logoElement = logoRef.current;
    const handleMouseEnter = () => {
      gsap.to(logoElement, { scale: defaultConfig.hoverScale, duration: 0.3, ease: 'power2.out' });
    };
    const handleMouseLeave = () => {
      gsap.to(logoElement, { scale: 1, duration: 0.3, ease: 'power2.out' });
    };

    logoElement.addEventListener('mouseenter', handleMouseEnter);
    logoElement.addEventListener('mouseleave', handleMouseLeave);

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
        <img
          src={imageUrl}
          alt={altText}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
};

AnimatedLogo.propTypes = {
  imageUrl: PropTypes.string,
  altText: PropTypes.string,
  config: PropTypes.object,
  theme: PropTypes.oneOf(['auto', 'light', 'dark']),
};

export default AnimatedLogo;
