import { Component, OnInit } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { WeatherService } from '../services/weather.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(private weatherService: WeatherService) { }

    weatherData?: WeatherData;
    cityName: string | undefined;

    ngOnInit(): void {
        alert('This is Dummy value. Please enter a CITY!');
    }

    private getWeatherData(cityName: string) {
        
        this.weatherService.getWeatherData(cityName)
            .subscribe({
                next: (response) => {
                    this.weatherData = response;

                },
                error: (error) => {
                    console.error('error caught in component', error);
                }
            })
    }

    onSubmit() {
        if (this.cityName === undefined) {
            alert(`Please enter a city.`);
        }
        else {
            this.getWeatherData(this.cityName);
            this.cityName = ' ';
        }
    }

}
