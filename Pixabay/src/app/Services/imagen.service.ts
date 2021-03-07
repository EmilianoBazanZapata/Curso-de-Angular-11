import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  private $Error = new Subject<string>();
  private $TerminoBusqueda = new Subject<string>();
  constructor() 
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
  
}
