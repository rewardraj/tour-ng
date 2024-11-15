export interface City {
  id: string;
  name: string;
  lat: number;
  lon: number;
  population?: number;
  description?: string;
  photos?: string[];
}

export interface CityResponse {
  geonames: City[];
}

export interface PhotoResponse {
  results: { urls: { small: string } }[];
}
