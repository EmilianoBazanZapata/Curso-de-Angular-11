import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { EmpleadoService } from 'src/app/Services/empleado.service';
import { Empleado } from 'src/app/Models/Empleado';
import { MatDialog } from '@angular/material/dialog';
import { MensajeConfirmacionComponent } from '../Shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css']
})
export class ListEmpleadoComponent implements AfterViewInit, OnInit {


  displayedColumns: string[] = ['Nombre', 'Correo', 'EstadoCivil', 'FechadeIngreso', 'Sexo', 'Telefono', 'Acciones'];
  // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // Creo un arregl ode empleados vacia
  ListEmpleado: Empleado[];

  constructor(private _EmpleadoService: EmpleadoService,
              public dialog: MatDialog,
              public snackbar: MatSnackBar) {

  }

  ngOnInit(): void {
    this.CargarEmpleados();
  }
  ngAfterViewInit() {


  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  CargarEmpleados() {
    // relleno la lista con el listado del servicio
    this.ListEmpleado = this._EmpleadoService.GetEmpleados();
    // paso los datros al data source
    this.dataSource = new MatTableDataSource(this.ListEmpleado);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  EliminarEmpleado(id: number) {
    const dialogRef = this.dialog.open(MensajeConfirmacionComponent, {
      width: '400px',
      data: { mensaje: 'Esta Seguro de eliminar este Empleado ? ' }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result === 'Aceptar')
      {
        // elimino el empleado enviando el id al service
      this._EmpleadoService.EliminarEmpleado(id);
      // recargo la ista
      this.CargarEmpleados();
      this.snackbar.open('El Empleado se elimino Exitosamente','',{duration:4000});

      }

    });

  }
}
