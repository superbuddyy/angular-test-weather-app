import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherComponent } from './weather.component';
import { SearchComponent } from './component/search/search.component';
import { ResultsComponent } from './component/results/results.component';
import { provideMockStore } from '@ngrx/store/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CityWeatherEffects } from './store/effects/cityWeather';
import { CityWeatherReducer } from './store/reducers/cityWeather';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        WeatherComponent,
        SearchComponent,
        ResultsComponent
      ],
      providers: [provideMockStore({})],
      imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        StoreModule.forRoot({ weather: CityWeatherReducer }),
        EffectsModule.forRoot([CityWeatherEffects])
      ]
    });
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
