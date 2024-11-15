import { LoadScript } from "@react-google-maps/api";
import { ReactNode } from "react";

interface MapLoaderProps {
  children: ReactNode;
}

const MapLoader = ({ children }: MapLoaderProps) => (
  <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
    {children}
  </LoadScript>
);

export default MapLoader;
