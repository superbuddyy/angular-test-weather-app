// TO BE IMPLEMENTED IF NF-RX IS USED
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CityWeatherState } from '../reducers/cityWeather';

export const getCityWeatherState = createFeatureSelector<CityWeatherState>('weather');

export const getCityWeather = createSelector(getCityWeatherState, (state: CityWeatherState) => state.cityWeathers);

export const getSearchError = createSelector(getCityWeatherState, (state: CityWeatherState) => state.error);

export const getLoading = createSelector(getCityWeatherState, (state: CityWeatherState) => state.loading);