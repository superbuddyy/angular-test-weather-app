import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from './weather.service';
import { WeatherComponent } from './weather.component';
import { ResultsComponent } from './component/results/results.component';
import { SearchComponent } from './component/search/search.component';

// IF YOU DECIDE TO USE NG-RX YOU'LL NEED TO UNCOMMENT SOME LINES
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CityWeatherReducer } from './store/reducers/cityWeather';
import { CityWeatherEffects } from './store/effects/cityWeather';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ weather: CityWeatherReducer }),
    EffectsModule.forRoot([CityWeatherEffects])
  ],
  declarations: [
    SearchComponent,
    ResultsComponent,
    WeatherComponent
  ],
  providers: [
    WeatherService
  ],
  exports: [
    WeatherComponent
  ]
})
export class WeatherModule { }
