import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css']
})
export class CountEmpleadosComponent implements OnInit {

  @Input() Todos:number;
  @Input() Masculino:number;
  @Input() Femenino:number;
  RadioButtonSeleccionado = "Todos";
  constructor() { 
    this.Todos= 0;
    this.Masculino = 0;
    this.Femenino = 0;
  }

  ngOnInit(): void {

  }

}
