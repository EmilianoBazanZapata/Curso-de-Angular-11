import { Component, OnInit } from '@angular/core';
import{Tarea} from 'src/app/Models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  listTareas :Tarea[] = [];
  nombreTarea='';
  constructor() { }

  ngOnInit(): void {
  }
  AgregarTarea()
  {
    //Crear un objeto tareas
     const tarea : Tarea=
     {
       nombre:this.nombreTarea,
       estado: false
     }

    //agregar objeto al array
    this.listTareas.push(tarea);

    //reset form
    this.nombreTarea='';
  }
  EliminarTarea(index:number):void
  {
    this.listTareas.splice(index,1);
  }
  ActualizarTarea(tarea:Tarea , index:number):void
  {
    this.listTareas[index].estado = !tarea.estado;
  }
}
