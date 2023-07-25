import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CityWeather } from './store/models/cityWeather.model';
import { map } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class WeatherService {
  apiUrl = 'https://api.openweathermap.org/data/2.5/forecast';
  apiKey = '4e29991539b1099e5b5f16ccf3ce3f0f';

  constructor(private http: HttpClient) { }

  searchWeatherForCity(city: string) {
    //implement the service
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}`;
    return this.http.get(url).pipe(
      map((cityWeather: any) => {
        const result: CityWeather = {};
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowDateString = tomorrow.toISOString().split('T')[0];

        const weatherList = cityWeather.list;

        for (const item of weatherList) {
          if (item.dt_txt.includes(tomorrowDateString)) {
            
            const nextDayTemperature = (item.main.temp - 273.15).toFixed(2);
            if (result.weathers === undefined) {
              result.weathers = [];
            }
            
            result.weathers.push({ temperature: nextDayTemperature, date: item.dt_txt });
          }
        }
        result.city = cityWeather.city.name;
        return result;
      })
    );
  }
}

