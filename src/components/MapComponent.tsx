
import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface MapComponentProps {
  location: {
    lat: number;
    lng: number;
  };
  title: string;
  address: string;
}

const MapComponent = ({ location, title, address }: MapComponentProps) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const scriptLoading = useRef(false);

  useEffect(() => {
    // Avoid duplicate initialization
    if (!mapRef.current || scriptLoading.current) return;

    // Define initialization function once
    if (!window.initMap) {
      window.initMap = () => {
        if (!mapRef.current) return;
        
        try {
          // Create map instance
          const mapInstance = new window.google.maps.Map(mapRef.current, {
            center: location,
            zoom: 15,
            styles: [
              {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [{"saturation": 36}, {"color": "#333333"}, {"lightness": 40}]
              },
              {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [{"visibility": "on"}, {"color": "#ffffff"}, {"lightness": 16}]
              },
              {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [{"visibility": "off"}]
              },
              {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#fefefe"}, {"lightness": 20}]
              },
              {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{"color": "#fefefe"}, {"lightness": 17}, {"weight": 1.2}]
              }
            ]
          });
          
          mapInstanceRef.current = mapInstance;
          
          // Add marker
          const marker = new window.google.maps.Marker({
            position: location,
            map: mapInstance,
            title: title,
            animation: window.google.maps.Animation.DROP
          });
          
          // Add info window
          const infowindow = new window.google.maps.InfoWindow({
            content: `
              <div style="padding: 10px; max-width: 200px;">
                <h3 style="margin: 0; font-size: 16px; color: #2B4D82; font-weight: bold;">${title}</h3>
                <p style="margin: 5px 0 0; font-size: 12px;">${address}</p>
              </div>
            `
          });
          
          marker.addListener("click", () => {
            infowindow.open(mapInstance, marker);
          });
          
          setMapLoaded(true);
          scriptLoading.current = false;
        } catch (error) {
          console.error("Error initializing map:", error);
          setMapLoaded(false);
          scriptLoading.current = false;
        }
      };
    }
    
    // Check for existing script to avoid duplicates
    const scriptId = 'google-maps-script';
    const existingScript = document.getElementById(scriptId);
    
    if (!existingScript) {
      scriptLoading.current = true;
      
      // Create script with unique ID to ensure it's not duplicated
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = `https://maps.googleapis.com/maps/api/js?key=&callback=initMap`;
      script.async = true;
      script.defer = true;
      
      // Use modern event handlers
      script.addEventListener('load', () => {
        // The callback will handle initialization
      });
      
      script.addEventListener('error', () => {
        console.error("Error loading Google Maps script");
        scriptLoading.current = false;
        setMapLoaded(false);
      });
      
      document.head.appendChild(script);
    } else if (window.google && window.google.maps) {
      // If script is already loaded but map isn't, initialize manually
      window.initMap();
    }
    
    // Simple cleanup function that doesn't manipulate the DOM
    return () => {
      // Just nullify the ref, let React handle DOM cleanup
      mapInstanceRef.current = null;
    };
  }, []); // Run only once on mount

  return (
    <Card className="border-primary/5 dark:border-primary/10 shadow-lg dark:shadow-primary/5 overflow-hidden">
      <div className="h-2 bg-gradient-to-r from-secondary to-primary"></div>
      <CardContent className="p-0">
        <h2 className="sr-only">Our Location</h2>
        <div 
          ref={mapRef}
          className="h-[600px] w-full bg-muted/30 relative"
        >
          {!mapLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full"></div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MapComponent;
