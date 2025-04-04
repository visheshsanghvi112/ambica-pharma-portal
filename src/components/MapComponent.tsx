
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

    // Initialize map if it doesn't exist
    if (!googleMapRef.current) {
      googleMapRef.current = new window.google.maps.Map(mapRef.current, {
        center: { lat, lng },
        zoom,
      });
    } else {
      // Update existing map center and zoom
      googleMapRef.current.setCenter({ lat, lng });
      googleMapRef.current.setZoom(zoom);
    }

    // Remove existing marker if it exists
    if (markerRef.current) {
      markerRef.current.setMap(null);
    }

    // Add new marker
    markerRef.current = new window.google.maps.Marker({
      position: { lat, lng },
      map: googleMapRef.current,
    });

    // Clean up function
    return () => {
      // Only remove marker, don't try to manipulate the map DOM directly
      if (markerRef.current) {
        markerRef.current.setMap(null);
        markerRef.current = null;
      }
      
      // Don't manually clear the map div - this is causing the error
      // Let React handle the DOM manipulation
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
