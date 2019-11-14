import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listclima',
  templateUrl: './listclima.component.html',
  styleUrls: ['./listclima.component.sass']
})
export class ListclimaComponent implements OnInit {

  data: Observable<Object>;
  listas;

  constructor(private weather: WeatherService) { }

  ngOnInit() {
    this.grafHist();
  }

  grafHist(){
    this.weather.getHistorico(null)
    .subscribe(res => {
      
      this.data = res;
      
      //console.log(this.data['list']);
      this.listas = this.data['list'];

      let temp_max = res['list'].map(res => res.main.temp_max);
      let temp_min = res['list'].map(res => res.main.temp_min);
      let alldates = res['list'].map(res => res.dt)

    }, err=> {
      console.log(err);
    });
  }

}
