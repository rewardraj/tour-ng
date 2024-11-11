export interface Location {
  lat: number;
  lng: number;
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
  type: 'monument' | 'park' | 'museum' | 'landmark';
}
