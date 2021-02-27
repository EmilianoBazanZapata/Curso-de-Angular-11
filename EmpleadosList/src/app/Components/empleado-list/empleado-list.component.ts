import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/Models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {

  ListEmpleado : Empleado[]=
  [
    {
      Legajo:1,
      Nombre:'juan',
      Apellido:'perez',
      Sexo:'masculino',
      Salario:120.000
    },
    {
      Legajo:2,
      Nombre:'daniela',
      Apellido:'rodriguez',
      Sexo:'femenino',
      Salario:920.000
    },
    {
      Legajo:3,
      Nombre:'fabiana',
      Apellido:'morales',
      Sexo:'femenino',
      Salario:220.000
    },
    {
      Legajo:4,
      Nombre:'carlos',
      Apellido:'peposo',
      Sexo:'masculino',
      Salario:85.467
    }
    ,
    {
      Legajo:4,
      Nombre:'cristina',
      Apellido:'kirchner',
      Sexo:'femenino',
      Salario:980.678
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
