
import React from 'react';
import { motion } from 'framer-motion';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for Leaflet marker icon issues in React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// We'll use a simpler approach until we can properly load react-leaflet
interface MapComponentProps {
  lat: number;
  lng: number;
  zoom?: number;
  title?: string;
}

// Create a default icon for leaflet markers
const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const MapComponent: React.FC<MapComponentProps> = ({ lat, lng, zoom = 15, title = "Ambica Pharma" }) => {
  const mapRef = React.useRef<HTMLDivElement>(null);
  
  React.useEffect(() => {
    if (!mapRef.current) return;
    
    // Initialize the map when the component mounts
    const map = L.map(mapRef.current).setView([lat, lng], zoom);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Add a marker
    L.marker([lat, lng], { icon: DefaultIcon })
      .addTo(map)
      .bindPopup(`<div class="p-2 font-semibold text-gray-800">${title}</div>`)
      .openPopup();
    
    // Clean up the map when the component unmounts
    return () => {
      map.remove();
    };
  }, [lat, lng, zoom, title]);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full rounded-xl overflow-hidden shadow-xl border border-primary/20"
    >
      <div 
        ref={mapRef} 
        style={{ height: '400px', width: '100%' }}
        className="z-10"
      />
    </motion.div>
  );
};

export default MapComponent;
