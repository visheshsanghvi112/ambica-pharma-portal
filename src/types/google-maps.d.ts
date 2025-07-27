
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

    class InfoWindow {
      constructor(options: any);
      open(map: Map, marker?: Marker): void;
      setContent(content: string): void;
    }

    class NavigationControl {
      constructor(options?: any);
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

    const Animation: {
      DROP: number;
      BOUNCE: number;
    };

    namespace event {
      function addListener(instance: any, eventName: string, handler: Function): any;
      function clearInstanceListeners(instance: any): void;
    }
  }
}
