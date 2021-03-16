import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-edit-empleado',
  templateUrl: './add-edit-empleado.component.html',
  styleUrls: ['./add-edit-empleado.component.css']
})
export class AddEditEmpleadoComponent implements OnInit {

  EstadosCiviles: any[] =
  [
    'Soltero',
    'Casado',
    'Viudo'
  ];
  myForm:FormGroup;
  Sexo:string;

  constructor(private fb:FormBuilder) 
  {
    this.myForm = this.fb.group(
      {
        nombreCompleto:[''],
        Correo:[''],
        Telefono:[''],
        FechaIngreso:[''],
        EstadoCivil:[''],
        Sexo:['Masculino']
      });
  }

  ngOnInit(): void {
  }
}
