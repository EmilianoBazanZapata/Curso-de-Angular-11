import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/Models/Empleado';
import { EmpleadoService } from 'src/app/Services/empleado.service';

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

  constructor(private fb:FormBuilder ,
              private _EmpleadoService :EmpleadoService,
              private route :Router,
              private snackbar:MatSnackBar) 
  {
    this.myForm = this.fb.group(
      {
        nombreCompleto:['',Validators.required],
        Correo:['',Validators.required],
        Telefono:['',Validators.required],
        FechaIngreso:['',Validators.required],
        EstadoCivil:['',Validators.required],
        Sexo:['Masculino']
      });
  }

  ngOnInit(): void {
  }

  GuardarEmpleado()
  {
     const empleado : Empleado=
    {
      NombreCompleto: this.myForm.get('nombreCompleto').value,
      Correo: this.myForm.get('Correo').value,
      Telefono: this.myForm.get('Telefono').value,
      FechaDeIngreso: this.myForm.get('FechaIngreso').value,
      EstadoCivil: this.myForm.get('EstadoCivil').value,
      Sexo: this.myForm.get('Sexo').value
    }
    this._EmpleadoService.AgregarEmpleado(empleado);
    this.route.navigate(['/']);
    this.snackbar.open('El Empleado se registro Exitosamente','',{duration:4000});
  }
}
