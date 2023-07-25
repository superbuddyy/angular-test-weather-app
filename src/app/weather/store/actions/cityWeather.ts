import { createAction, props } from '@ngrx/store';
import { CityWeather } from '../models/cityWeather.model';

export const SearchCityWeather = createAction(
  '[CityWeather] Search CityWeather',
  props<{ payload: string }>()
);

export const SearchCityWeatherSuccess = createAction(
  '[CityWeather] Search CityWeather Success',
  props<{ payload: CityWeather }>()
);

export const SearchCityWeatherError = createAction(
  '[CityWeather] Search CityWeather Error',
  props<{ payload: any }>()
);