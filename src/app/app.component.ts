import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';


import { Store } from '@ngrx/store';
import * as fromRoot from './redux/app.reducer'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService, private store: Store<fromRoot.State>){}

  nameOfTheCity$: Observable<string>;


  cityName: string = 'Wellington';
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';

    this.nameOfTheCity$ = this.store.select(fromRoot.getCity)
  }

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string){

    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      }
    })

  }


  changeCity(data){
    console.log(data);
    this.getWeatherData(data.nome);
  }

}

