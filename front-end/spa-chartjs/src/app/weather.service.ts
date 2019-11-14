import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  appid = '&appid=b1b15e88fa797225412429c1c50c122a1';
  local = 'Recife';
  

  /*
  Fornecemos dados climáticos históricos das cidades
  */
  private baseHistorico =  'https://samples.openweathermap.org/data/2.5/history/city?q=';
  /*
  Fornecemos dados sobre a poluição
  */
  private basePoluicao = 'https://samples.openweathermap.org/pollution/v1/co/0.0,10.0/2016-12-25T01:04:08Z.json?appid=5005b743d587e1573465d6a70f2b8ff4';
  
  constructor(private http: HttpClient){
  }
  
  getHistorico(valor): Observable<any> {
    console.log(valor);
    if(valor){
      this.local = valor;
    }
    console.log(`${this.baseHistorico}` + this.local + `${this.appid}`)
    return this.http.get(`${this.baseHistorico}` + this.local + `${this.appid}`);
  }


  getPoluicao(): Observable<any> {
    return this.http.get(`${this.basePoluicao}`);
  }

}