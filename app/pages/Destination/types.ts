export interface Location {
  lat: number;
  lng: number;
  city: string;
  spot: string;
}

export interface City {
  id: string;
  name: string;
  location: Location;
  description: string;
  attractions: TouristAttraction[];
}

export interface TouristAttraction {
  id: string;
  name: string;
  location: Location;
  description: string;
  type:
    | "Monument"
    | "Park"
    | "Museum"
    | "Landmark"
    | "Hiking"
    | "Mountain"
    | "Resort"
    | "Festival"
    | "Wildlife"
    | "Beach";
}
