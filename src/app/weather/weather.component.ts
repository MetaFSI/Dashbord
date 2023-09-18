import { Component } from '@angular/core';
import { WeatherService } from '../services/wather/weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  city = 'Tetouan'; // Replace with the desired city
  weatherData: any;
  roundedTemperature!: number;


  constructor(private weatherService: WeatherService) {}

    
  ngOnInit() {

    this.getWeatherData();
  }

  getWeatherData() {
    this.weatherService.getWeather(this.city).subscribe((data) => {
      this.weatherData = data;
      this.roundedTemperature = Math.ceil(this.weatherData.main.temp);
    });
  }
}
