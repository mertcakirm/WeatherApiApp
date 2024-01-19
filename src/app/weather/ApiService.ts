import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherComponent } from './weather.component';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {  }
  
  
  getApiData(cityName:string): Observable<any> {
    const url = `https://api.weatherbit.io/v2.0/current?city=${cityName}}&key=c422a71defdf4c9aa59f8e35ecffa133`;
  
    return this.http.get(url);

    
  }
}
