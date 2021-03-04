import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {

  Url ='https://api-ssl.bitly.com/v4/shorten';
  
  constructor(private http: HttpClient) 
  {

  }
  GetUrlShort(nombre:string):Observable<any>
  {
    //creamos una constante para pasar el token
    //const TokenHeader = new HttpHeaders({Authorization: 'Bearer '+ this.Token})
    //creamos una constante para pasar la url
    const Body=
    {
      long_url:nombre
    }
    return this.http.post(this.Url,Body);
  }
}
