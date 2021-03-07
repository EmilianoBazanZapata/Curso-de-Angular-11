import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  private $Error = new Subject<string>();
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
}
