import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  private $Error = new Subject<string>();
  private $TerminoBusqueda = new Subject<string>();
  constructor(private http:HttpClient) 
  {

  }
  SetError(Mensaje:string)
  {
    //recibo el texto del error del componente buscar imagen
    this.$Error.next(Mensaje);
  }
  GetError():Observable<string>
  {
    return this.$Error.asObservable();
  }
  EnviarTerminoBusqueda(Termino:string)
  {
    this.$TerminoBusqueda.next(Termino);
  }
  GetTerminoBusqueda():Observable<string>
  {
    return this.$TerminoBusqueda.asObservable();
  }
  GetImagenes(Termino:string):Observable<any>
  {
    const Key='=20565064-032233a710231fe20593bc0ac';
    const Url='https://pixabay.com/api/?key'+ Key +'&q=' + Termino;
    return this.http.get(Url);
  }
}
