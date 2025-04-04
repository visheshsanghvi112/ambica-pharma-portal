
interface Window {
  google: typeof google;
  initMap: () => void;
}

declare namespace google {
  namespace maps {
    class Map {
      constructor(element: HTMLElement, options: MapOptions);
      setCenter(latLng: LatLngLiteral): void;
      setZoom(zoom: number): void;
    }

    class Marker {
      constructor(options: MarkerOptions);
      setMap(map: Map | null): void;
    }

    interface MapOptions {
      center: LatLngLiteral;
      zoom: number;
      [key: string]: any;
    }

    interface MarkerOptions {
      position: LatLngLiteral;
      map: Map;
      [key: string]: any;
    }

    interface LatLngLiteral {
      lat: number;
      lng: number;
    }
  }
}
