import { Weather } from "./weather.model";

export interface CityWeather {
  id?: number;
  city?: string;
  country?: string;
  weathers?: Weather[];
}

