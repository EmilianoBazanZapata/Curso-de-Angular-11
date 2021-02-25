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

    //agregar objeto al array

    //reset form
  }

}
