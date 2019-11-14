import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Chart } from 'chart.js';
import { Observable, throwError } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-compbox',
  templateUrl: './compbox.component.html',
  styleUrls: ['./compbox.component.sass']
})
export class CompboxComponent implements OnInit {
  
  temp_max;
  temp_min;
  temp_med;
  qtd_list;

  constructor(private weather: WeatherService) { }

  ngOnInit() {
    this.grafHist();
  }

  grafHist(){
    this.weather.getHistorico(null)
    .subscribe(res => {
      console.log(res)

      let list_temp_max = res['list'].map(res => res.main.temp_max);
      this.temp_max = Math.max.apply(null,list_temp_max);

      let list_temp_min = res['list'].map(res => res.main.temp_min);
      this.temp_min = Math.min.apply(null,list_temp_min);

      this.temp_med = (this.temp_max + this.temp_min)/2;

      this.qtd_list = list_temp_max.length;

      }, err=> {
      console.log(err);
      });
  }

}
