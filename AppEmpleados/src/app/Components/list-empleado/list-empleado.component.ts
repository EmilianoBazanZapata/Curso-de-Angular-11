import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { EmpleadoService } from 'src/app/Services/empleado.service';
import { Empleado } from 'src/app/Models/Empleado';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css']
})
export class ListEmpleadoComponent implements AfterViewInit , OnInit{


  displayedColumns: string[] = ['Nombre', 'Correo', 'EstadoCivil', 'FechadeIngreso','Sexo' ,'Telefono','Acciones'];
  //dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  //Creo un arregl ode empleados vacia
  ListEmpleado:Empleado[];

  constructor(private _EmpleadoService:EmpleadoService) 
  {

  }

  ngOnInit():void
  {
    this.CargarEmpleados();
  }
  ngAfterViewInit() {
    
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  CargarEmpleados()
  {
    //relleno la lista con el listado del servicio
    this.ListEmpleado = this._EmpleadoService.GetEmpleados();
    //paso los datros al data source
    this.dataSource = new MatTableDataSource(this.ListEmpleado);
    console.log(this.ListEmpleado);
  }
  EliminarEmpleado(id:number)
  {
    //elimino el empleado enviando el id al service 
    this._EmpleadoService.EliminarEmpleado(id);
    //recargo la ista
    this.CargarEmpleados();
  }
}
