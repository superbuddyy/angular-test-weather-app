import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { Action } from '@ngrx/store';
import { CityWeatherEffects } from './cityWeather';
import { WeatherService } from '../../weather.service';
import {
  SearchCityWeather,
  SearchCityWeatherSuccess
} from '../actions/cityWeather';
import { CityWeather } from '../models/cityWeather.model';

describe('CityWeatherEffects', () => {
  let effects: CityWeatherEffects;
  let actions$: Observable<Action>;

  const weatherServiceSpy = jasmine.createSpyObj('WeatherService', ['searchWeatherForCity']);
  const mockCityWeather: CityWeather = { /* mock city weather object */ };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CityWeatherEffects,
        provideMockActions(() => actions$),
        { provide: WeatherService, useValue: weatherServiceSpy }
      ]
    });
    effects = TestBed.inject(CityWeatherEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('searchCityWeather$', () => {
    it('should return a SearchCityWeatherSuccess action with the city weather data when successful', () => {
      // Arrange
      const payload = 'London';
      const action = SearchCityWeather({ payload });
      const expectedAction = SearchCityWeatherSuccess({ payload: mockCityWeather });
      weatherServiceSpy.searchWeatherForCity.and.returnValue(of(mockCityWeather));

      // Act
      actions$ = of(action);
      effects.searchCityWeather$.subscribe((resultAction) => {
        // Assert
        expect(resultAction).toEqual(expectedAction);
      });
    });
  });
});