import { Component,Input,OnInit } from '@angular/core';
import { Empleado } from 'src/app/Models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {
  RadioButtonSeleccionado = "Todos";
  ListEmpleado : Empleado[]=
  [
    {
      Legajo:1,
      Nombre:'juan',
      Apellido:'perez',
      Sexo:'masculino',
      Salario:120000
    },
    {
      Legajo:2,
      Nombre:'daniela',
      Apellido:'rodriguez',
      Sexo:'femenino',
      Salario:920000
    },
    {
      Legajo:3,
      Nombre:'fabiana',
      Apellido:'morales',
      Sexo:'femenino',
      Salario:220000
    },
    {
      Legajo:4,
      Nombre:'carlos',
      Apellido:'peposo',
      Sexo:'masculino',
      Salario:85467
    }
    ,
    {
      Legajo:5,
      Nombre:'cristina',
      Apellido:'kirchner',
      Sexo:'femenino',
      Salario:980678098
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }
  ObtenerCantidad():number
  {
    return this.ListEmpleado.length;
  }
  ObtenerCantidadFemeninos():number
  {
    return this.ListEmpleado.filter(list => list.Sexo ==='femenino').length;
  }
  ObtenerCantidadMasculinos():number
  {
    return this.ListEmpleado.filter(list => list.Sexo ==='masculino').length;
  }
}
