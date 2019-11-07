import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  private baseUrl = 'http://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22';
  
  constructor(private http: HttpClient){
  }


  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

}