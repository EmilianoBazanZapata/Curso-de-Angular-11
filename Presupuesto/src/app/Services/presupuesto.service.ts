import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  Presupuesto:number;
  Restante:number;
  constructor() 
  {
    this.Presupuesto = 0;
    this.Restante = 0;
  }

  AgregarGasto(gasto:any)
  {
    this.Restante = this.Restante - gasto.Cantidad;
  }
}
