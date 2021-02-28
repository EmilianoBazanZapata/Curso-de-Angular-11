import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from 'src/app/Services/presupuesto.service';

@Component({
  selector: 'app-ingresar-presupuesto',
  templateUrl: './ingresar-presupuesto.component.html',
  styleUrls: ['./ingresar-presupuesto.component.css']
})
export class IngresarPresupuestoComponent implements OnInit {

  Cantidad:number;
  CantidadIncorrecta:boolean;
  constructor(private _presupuestoService : PresupuestoService, 
              private router : Router) 
  {
    this.Cantidad=0;
    this.CantidadIncorrecta = false;
   }

  ngOnInit(): void {
  }
  Agregar()
  {
    if(this.Cantidad>=0)
    {
      this.CantidadIncorrecta = false;
      this._presupuestoService.Presupuesto = this.Cantidad;
      this._presupuestoService.Restante = this.Cantidad;
      this.router.navigate(['/Gastos']);
    }
    else
    {
      this.CantidadIncorrecta = true;
      this.Cantidad = 0;
    }
  }
}
