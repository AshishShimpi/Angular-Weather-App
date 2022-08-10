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
    cityName: string = 'Britsh colombia';

    ngOnInit(): void { }

    private getWeatherData(cityName: string) {
        // console.log('got' , cityName);
        this.weatherService.getWeatherData(cityName)
            .subscribe({
                next: (response) => {
                    this.weatherData = response;
                    console.log(response, "/n");
                },
                error: (error) => {
                    console.error('error caught in component', error);
                }
            })
    }

    onSubmit() {
        this.getWeatherData(this.cityName);
        this.cityName = ' ';
    }

}
