import { Injectable } from '@angular/core';
import { Empleado } from '../Models/Empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  // creo un lista de empleados
  ListEmpleados: Empleado[] =
  [{
    NombreCompleto: 'Emiliano Bazan Zapata',
    Correo: 'ejemplo@gmail.com',
    Telefono: 35237,
    Sexo: 'Masculino',
    FechaDeIngreso: '15/05/2000',
    EstadoCivil: 'Soltero'
  }];
  constructor() { }
  // un metodo obtiene dicha lista
  GetEmpleados()
  {
    return this.ListEmpleados.slice();
  }
  EliminarEmpleado(id: number)
  {
    this.ListEmpleados.splice(id, 1);
  }
  AgregarEmpleado(empleado : Empleado)
  {
    this.ListEmpleados.unshift(empleado);
  }
  GetEmpleado(index:number)
  {
    return this.ListEmpleados[index];
  }
  EditarEmpleado(empleado:Empleado , index:number)
  {
    this.ListEmpleados[index].NombreCompleto= empleado.NombreCompleto;
    this.ListEmpleados[index].Correo= empleado.Correo;
    this.ListEmpleados[index].EstadoCivil= empleado.EstadoCivil;
    this.ListEmpleados[index].FechaDeIngreso= empleado.FechaDeIngreso;
    this.ListEmpleados[index].Sexo= empleado.Sexo;
    this.ListEmpleados[index].Telefono= empleado.Telefono;
  }
}
