import { useEffect, useRef } from 'react';

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Aquí puedes integrar un mapa como Google Maps o Mapbox
    // Por ahora, mostramos un marcador estático
    if (mapRef.current) {
      mapRef.current.innerHTML = '<p>Mapa estático no disponible en esta demo.</p>';
    }
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ width: '100%', height: '400px', backgroundColor: '#e9ecef', textAlign: 'center', lineHeight: '400px' }}
    >
      Cargando mapa...
    </div>
  );
};

export default Map;
