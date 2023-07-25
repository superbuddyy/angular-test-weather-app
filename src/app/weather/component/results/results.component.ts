import { Component, OnChanges } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CityWeather } from '../../store/models/cityWeather.model';
import { CityWeatherState } from '../../store/reducers/cityWeather';
import { OnInit } from '@angular/core';
import { getCityWeather, getLoading } from '../../store/selectors/cityWeather';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  cityWeathers: CityWeather[] = [];
  loading: boolean = false;
  constructor(private store: Store<CityWeatherState>) {}

  ngOnInit() {
    this.store.pipe(select(getCityWeather)).subscribe((cityWeathers: CityWeather[]) => {
      console.log(cityWeathers)
      this.cityWeathers = cityWeathers;
    });
    this.store.pipe(select(getLoading)).subscribe((loading: boolean) => {
      console.log(loading)
      this.loading = loading;
    });
  }
  
}

