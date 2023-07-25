import { Component, EventEmitter, Output, OnInit  } from '@angular/core';
import { CityWeather } from '../../store/models/cityWeather.model';
import { Store, select } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchCityWeatherError } from '../../store/actions/cityWeather';
import { getSearchError } from '../../store/selectors/cityWeather';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  // IMPLEMENT ANY INPUT OR OUTPUT YOU MIGHT NEED
  searchForm: FormGroup ;
  searchError: any = null;
  @Output() searchEvent = new EventEmitter<string>();

  constructor(
    private store: Store<{ weather: CityWeather }>,
    private formBuilder: FormBuilder
  ) {
    this.searchForm = this.formBuilder.group({
      city: ['', Validators.required]
    });
  }
  onKeydown() {
    console.log('onKeydown')
    this.store.dispatch(SearchCityWeatherError({payload: null}))
  }
  onSearch() {
    // TO BE IMPLEMENTED
    if( this.searchForm.invalid) {
      this.searchForm.markAllAsTouched();
      return;
    }
    this.searchEvent.emit(this.searchForm.value.city);
  }
  ngOnInit(): void {
    this.store.pipe(select(getSearchError)).subscribe((searchError: any) => {
      console.log(searchError)
      this.searchError = searchError;
    });
  }
}
