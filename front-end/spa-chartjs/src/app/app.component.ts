import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { Chart } from 'chart.js';
import { Observable, throwError } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'spa-chartjs';

  data: Observable<Object>;

  chart = [];

  constructor(private weather: WeatherService) {}

  /*
  Usada a seguinte extensão do chrome para consegui usar
  a api no ambiente de desenvolvimento.
  https://chrome.google.com/webstore/search/CORS
  */
  ngOnInit() {
    //this.data = 
    this.weather.getAll()
    .subscribe(res => {
      console.log(res)
    }, err=> {
      console.log(err);
    });
  }
}
