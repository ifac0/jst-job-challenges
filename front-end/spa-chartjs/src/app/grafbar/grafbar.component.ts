import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Chart } from 'chart.js';
import { Observable, throwError } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-grafbar',
  templateUrl: './grafbar.component.html',
  styleUrls: ['./grafbar.component.sass']
})

export class GrafbarComponent implements OnInit {

  data: Observable<Object>;
  chart2 = [];

  constructor(private weather: WeatherService) { }

  ngOnInit() {
    this.grafHistBarra()
  }

  grafHistBarra(){
    this.weather.getHistorico(null)
    .subscribe(res => {
      //console.log(res)

      let temp_max = res['list'].map(res => res.main.temp_max);
      let temp_min = res['list'].map(res => res.main.temp_min);
      let alldates = res['list'].map(res => res.dt)

      let weatherDates = []
      alldates.forEach((res) => {
          let jsdate = new Date(res * 1000)
          weatherDates.push(jsdate.toLocaleTimeString('pt', { year: 'numeric', month: 'short', day: 'numeric' }))
      })

      this.chart2 = new Chart('hist2', {
          type: 'bar',
          data: {
            labels: weatherDates,
            datasets: [
              { 
                data: temp_max,
                borderColor: "#3cba9f",
                backgroundColor: "#3cba9f",
                fill: false
              },
              { 
                data: temp_min,
                borderColor: "#ffcc00",
                backgroundColor: "#ffcc00",
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
                display: false
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