import { Injectable } from '@angular/core';
import { Empleado } from '../Models/Empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  //creo un lista de empleados
  ListEmpleados:Empleado[]=
  [{
    NombreCompleto:'Emiliano Bazan Zapata',
    Correo:'ejemplo@gmail.com',
    Telefono:35237232373523,
    Sexo:'Masculino',
    FechaDeIngreso:new Date(),
    EstadoCivil:'Soltero'
  }]
  constructor() { }
  //un metodo obtiene dicha lista
  GetEmpleados()
  {
    return this.ListEmpleados.slice();
  }
}
