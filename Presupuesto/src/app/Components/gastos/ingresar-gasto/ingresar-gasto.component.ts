import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/Services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent implements OnInit {

  NombreGasto:string;
  Cantidad:number;
  FormularioCorrecto:boolean;
  TextoIncorrecto:string
  constructor( private _PresupuestoService : PresupuestoService) 
  {
    this.NombreGasto = '';
    this.Cantidad = 0;
    this.FormularioCorrecto = false;
    this.TextoIncorrecto = 'debe ingresar datos validos'
  }

  ngOnInit(): void {
  }
  AgregarGasto()
  {
    if(this.Cantidad > this._PresupuestoService.Restante)
    {
      this.FormularioCorrecto = true;
      this.TextoIncorrecto = 'La cantidad ingresada es mayor a la restante'  ;
      return;
    }
    if(this.NombreGasto === '' || this.Cantidad <=0)
    {
      this.FormularioCorrecto = true;
    }
    else
    {
      //creamos un objeto gasto
      const GASTO=
      {
        nombre:this.NombreGasto,
        cantidad:this.Cantidad
      }

      //enviamos el objeto a los subscriptores via subjet
      this._PresupuestoService.AgregarGasto(GASTO);

      //resetramos formulario
      this.FormularioCorrecto = false;
      this.NombreGasto = '';
      this.Cantidad = 0;
    }
  }

}
