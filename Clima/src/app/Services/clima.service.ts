import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  Url_1='https://api.openweathermap.org/data/2.5/weather?q=';
  Url_2='&appid=';
  Key='5754e3ef9c214e608e57faad2486bd70';
  constructor(private http:HttpClient) 
  {

  }
  GetClima(ciudad:string): Observable<any>
  {
    //concateno la url para hacer la solicitud get 
    const Clima = this.Url_1 + ciudad + this.Url_2 + this.Key;
    return this.http.get(Clima);
    
  }
}
