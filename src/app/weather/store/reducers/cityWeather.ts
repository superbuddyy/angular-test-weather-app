import { createReducer, on, Action } from '@ngrx/store';
import { SearchCityWeatherSuccess, SearchCityWeather, SearchCityWeatherError } from '../actions/cityWeather';
import { CityWeather } from '../models/cityWeather.model';

export interface CityWeatherState {
  cityWeathers: CityWeather[];
  loading: boolean;
  error: any;
}

export const initialState: CityWeatherState = {
  cityWeathers: [],
  loading: false,
  error: null
};

export const reducer = createReducer(
  initialState,
  on(SearchCityWeatherSuccess, (state, { payload }) => ({
    ...state,
    cityWeathers: [...state.cityWeathers, payload]
  })),
  on(SearchCityWeather, state => ({ ...state, loading: true })),
  on(SearchCityWeatherError, (state, { payload }) => ({
    ...state,
    error: payload,
    loading: false
  }))
);

export function CityWeatherReducer(state: CityWeatherState | undefined, action: Action) {
  return reducer(state, action);
}