import React, { useEffect, useRef } from 'react';

interface MapComponentProps {
  lat: number;
  lng: number;
  zoom?: number;
}

const MapComponent: React.FC<MapComponentProps> = ({ lat, lng, zoom = 15 }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const googleMapRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.Marker | null>(null);

  useEffect(() => {
    if (!window.google || !mapRef.current) return;

    // Create the map only once
    googleMapRef.current = new window.google.maps.Map(mapRef.current, {
      center: { lat, lng },
      zoom,
    });

    // Add marker
    markerRef.current = new window.google.maps.Marker({
      position: { lat, lng },
      map: googleMapRef.current,
    });

    // Clean up function
    return () => {
      // Remove marker
      if (markerRef.current) {
        markerRef.current.setMap(null);
        markerRef.current = null;
      }

      // Remove map
      if (googleMapRef.current) {
        googleMapRef.current = null;
      }

      // Clear map div manually (just to be safe, avoid removeChild errors)
      if (mapRef.current) {
        mapRef.current.innerHTML = '';
      }
    };
  }, [lat, lng, zoom]);

  return (
    <div
      ref={mapRef}
      style={{ width: '100%', height: '400px', borderRadius: '16px', overflow: 'hidden' }}
    />
  );
};

export default MapComponent;
