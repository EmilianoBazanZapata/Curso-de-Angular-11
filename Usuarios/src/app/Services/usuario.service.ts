import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  Url='https://gorest.co.in/public-api/users';
  Token='05006cff34d9ca1ac1360bf46f4c2efa1944628fb10b36db40771885e9a79532';
  constructor(private http:HttpClient) { }
  GetUsuarios():Observable<any>
  {
    return this.http.get<any>(this.Url + '?access-token=' + this.Token);
  }
  GetUsuario(id:number):Observable<any>
  {
    //return this.http.get<any>(this.Url + '?id=' + id + '?access-token=' +this.Token)
    return this.http.get<any>(this.Url + '/' + id + '?access-token=' + this.Token)
  }
}
