import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of, Observable} from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { WeatherService } from '../../weather.service';
import {
    SearchCityWeather,
    SearchCityWeatherSuccess,
    SearchCityWeatherError,
} from '../actions/cityWeather';
import { CityWeather } from '../models/cityWeather.model';

@Injectable({
  providedIn: "root"
})
export class CityWeatherEffects {
  constructor(private actions$: Actions, private weatherService: WeatherService) {}

  searchCityWeather$: Observable<Action>  = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchCityWeather),
      mergeMap( action => 
          this.weatherService.searchWeatherForCity(action.payload).pipe(
            map((cityWeather: CityWeather) => SearchCityWeatherSuccess({payload: cityWeather})),
            catchError(error => of(SearchCityWeatherError({payload: error.error})))
          )
      )
    )
  );
}