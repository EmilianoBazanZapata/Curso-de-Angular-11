import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  Url='http://api.openweathermap.org/data/2.5/weather?&appid=';
  Key='5754e3ef9c214e608e57faad2486bd70';
  constructor(private http:HttpClient) 
  {

  }
  GetClima(ciudad:string): Observable<any>
  {
    //concateno la url para hacer la solicitud get 
    const Url = this.Url + this.Key + '&q' + ciudad;

    return this.http.get(Url);

  }
}
