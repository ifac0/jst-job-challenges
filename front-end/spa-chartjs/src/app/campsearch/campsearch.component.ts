import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-campsearch',
  templateUrl: './campsearch.component.html',
  styleUrls: ['./campsearch.component.sass']
})
export class CampsearchComponent implements OnInit {


  constructor(private weather: WeatherService) { }

  ngOnInit() {
  }

  carregar(valor){
    this.weather.getHistorico(valor);
  }

}
