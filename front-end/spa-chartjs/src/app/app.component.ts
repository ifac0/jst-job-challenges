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
   this.grafHist();
  }

  grafHist(){
    this.weather.getHistorico()
    .subscribe(res => {
      console.log(res)

      let temp_max = res['list'].map(res => res.main.temp_max);
      let temp_min = res['list'].map(res => res.main.temp_min);
      let alldates = res['list'].map(res => res.dt)

      let weatherDates = []
      alldates.forEach((res) => {
          let jsdate = new Date(res * 1000)
          weatherDates.push(jsdate.toLocaleTimeString('pt', { year: 'numeric', month: 'short', day: 'numeric' }))
      })

      this.chart = new Chart('hist', {
          type: 'line',
          data: {
            labels: weatherDates,
            datasets: [
              { 
                data: temp_max,
                borderColor: "#3cba9f",
                fill: false
              },
              { 
                data: temp_min,
                borderColor: "#ffcc00",
                fill: false
              },
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }],
            }
          }
        });

    }, err=> {
      console.log(err);
    });
  }
}
