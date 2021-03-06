import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http:HttpClient) 
  {

  }

  GetNoticias(parametros:any): Observable<any>
  {
    const Url = 'https://newsapi.org/v2/top-headlines?country='+ parametros.pais +'&category='+ parametros.categoria +'&apiKey=ec29833d33f946428655faf7b6172635';

    return this.http.get(Url);
  }
}