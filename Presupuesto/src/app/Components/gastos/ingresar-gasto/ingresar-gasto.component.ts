import { Component, OnInit } from '@angular/core';

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
  constructor() 
  {
    this.NombreGasto = '';
    this.Cantidad = 0;
    this.FormularioCorrecto = false;
    this.TextoIncorrecto = 'Nombre Gasto o Cantidad Incorrecta'
  }

  ngOnInit(): void {
  }
  AgregarGasto()
  {
    if(this.NombreGasto === '' || this.Cantidad <=0)
    {
      this.FormularioCorrecto = true;
    }
    else
    {
      this.FormularioCorrecto = false;
      this.NombreGasto = '';
      this.Cantidad = 0;
    }
  }

}
