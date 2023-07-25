import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CityWeather } from './store/models/cityWeather.model';
import { SearchCityWeather } from './store/actions/cityWeather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {

  constructor(
    private store: Store<{ weather: CityWeather }>,
  ) {}

  citySearch(cityName: string) {
    // TO BE IMPLMENTED
    this.store.dispatch(SearchCityWeather({payload: cityName}))
  }
}
