
import React, { useEffect, useRef } from 'react';

interface MapComponentProps {
  lat: number;
  lng: number;
  zoom?: number;
  title?: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ lat, lng, zoom = 15, title = "Ambica Pharma" }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.Marker | null>(null);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);

  useEffect(() => {
    // Don't attempt to initialize map if Google Maps API isn't loaded yet
    if (!window.google || !window.google.maps || !mapRef.current) {
      console.log("Google Maps not loaded or map container not ready");
      return;
    }

    // Create the map instance if it doesn't exist
    if (!mapInstanceRef.current) {
      console.log("Creating new map instance");
      const mapOptions: google.maps.MapOptions = {
        center: { lat, lng },
        zoom,
        mapTypeControl: true,
        fullscreenControl: true,
        streetViewControl: true,
        zoomControl: true,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
          }
        ]
      };
      
      mapInstanceRef.current = new window.google.maps.Map(mapRef.current, mapOptions);
    } else {
      // Update existing map position and zoom
      mapInstanceRef.current.setCenter({ lat, lng });
      mapInstanceRef.current.setZoom(zoom);
    }

    // Create and set marker
    if (markerRef.current) {
      markerRef.current.setMap(null); // Remove existing marker
    }

    markerRef.current = new window.google.maps.Marker({
      position: { lat, lng },
      map: mapInstanceRef.current,
      title,
      animation: window.google.maps.Animation.DROP
    });

    // Create info window
    if (!infoWindowRef.current) {
      infoWindowRef.current = new window.google.maps.InfoWindow({
        content: `<div class="p-2 font-semibold text-gray-800">${title}</div>`
      });
    } else {
      infoWindowRef.current.setContent(`<div class="p-2 font-semibold text-gray-800">${title}</div>`);
    }

    // Correctly add click listener to marker to show info window
    if (markerRef.current) {
      window.google.maps.event.addListener(markerRef.current, 'click', () => {
        if (infoWindowRef.current && mapInstanceRef.current) {
          infoWindowRef.current.open(mapInstanceRef.current, markerRef.current);
        }
      });
    }

    // Clean up
    return () => {
      if (markerRef.current) {
        // Just remove the marker from the map, don't try to delete DOM elements
        markerRef.current.setMap(null);
        window.google.maps.event.clearInstanceListeners(markerRef.current);
        markerRef.current = null;
      }
      
      // We don't need to explicitly remove the map or manipulate DOM elements
      // React will handle removing the container, and the map will be garbage collected
    };
  }, [lat, lng, zoom, title]);

  return (
    <div className="w-full rounded-xl overflow-hidden shadow-xl border border-primary/10">
      <div 
        ref={mapRef} 
        className="w-full h-[500px] z-10"
        aria-label="Google Map showing location of Ambica Pharma"
      />
    </div>
  );
};

export default MapComponent;
