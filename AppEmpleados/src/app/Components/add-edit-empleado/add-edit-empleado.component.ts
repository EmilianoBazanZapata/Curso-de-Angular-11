import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
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
  idEmpleado: any;
  accion = 'Crear';

  constructor(private fb:FormBuilder ,
              private _EmpleadoService :EmpleadoService,
              private route :Router,
              private snackbar:MatSnackBar ,
              private aRoute: ActivatedRoute) 
  {
    this.myForm = this.fb.group(
      {
        NombreCompleto:['',Validators.required],
        Correo:['',Validators.required],
        Telefono:['',Validators.required],
        FechaDeIngreso:['',Validators.required],
        EstadoCivil:['',Validators.required],
        Sexo:['Masculino']
      });
      const idParam = 'id';
    this.idEmpleado = this.aRoute.snapshot.params[idParam];
  }

  ngOnInit(): void {
    if (this.idEmpleado !== undefined) {
      this.accion = 'Editar';
      this.EditarEmpleado();
    }
  }

  GuardarEmpleado()
  {
     const empleado : Empleado=
    {
      NombreCompleto: this.myForm.get('NombreCompleto').value,
      Correo: this.myForm.get('Correo').value,
      Telefono: this.myForm.get('Telefono').value,
      FechaDeIngreso: this.myForm.get('FechaDeIngreso').value,
      EstadoCivil: this.myForm.get('EstadoCivil').value,
      Sexo: this.myForm.get('Sexo').value
    }
    if(this.idEmpleado !== undefined)
    {
      this.ActualizarEmpleado(empleado);
    }
    else
    {
      this.AgregarEmpleado(empleado);
    }
    
  }
  AgregarEmpleado(empleado : Empleado)
  {
    this._EmpleadoService.AgregarEmpleado(empleado);
    this.route.navigate(['/']);
    this.snackbar.open('El Empleado se registro Exitosamente','',{duration:4000});
  }
  ActualizarEmpleado(empleado : Empleado)
  {
    this._EmpleadoService.EditarEmpleado(empleado,this.idEmpleado);
    this.route.navigate(['/']);
    this.snackbar.open('El Empleado se actualizo Exitosamente','',{duration:4000});
  }
  EditarEmpleado()
  {
    const empleado: Empleado = this._EmpleadoService.GetEmpleado(this.idEmpleado);
    console.log(empleado);
    this.myForm.patchValue({
      NombreCompleto: empleado.NombreCompleto,
      Correo: empleado.Correo,
      Telefono: empleado.Telefono,
      FechaDeIngreso: empleado.FechaDeIngreso,
      EstadoCivil: empleado.EstadoCivil,
      Sexo: empleado.Sexo
    })
  }
}
