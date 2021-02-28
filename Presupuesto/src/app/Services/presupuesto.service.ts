import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  Presupuesto:number;
  Restante:number;
  private Gastos$ = new Subject<any>(); 
  constructor() 
  {
    this.Presupuesto = 0;
    this.Restante = 0;
  }

  AgregarGasto(gasto:any)
  {
    this.Restante = this.Restante - gasto.Cantidad;
    this.Gastos$.next(gasto);
  }
  GetGastos(): Observable<any>
  {
    return this.Gastos$.asObservable();
  }
}
