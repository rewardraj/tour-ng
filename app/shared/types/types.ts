export interface ActivityTypes {
  id: string;
  name: string;
  description: string;
  detailedDescription: string;
  city: string;
  image: string;
  images: string[];
  category: "Cultural" | "Adventure" | "Nature" | "Entertainment" | "Food";
  duration: string;
  price: string;
  rating: number;
}

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
