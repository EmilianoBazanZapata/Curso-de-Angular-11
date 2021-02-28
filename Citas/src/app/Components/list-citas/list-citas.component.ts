import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrls: ['./list-citas.component.css']
})
export class ListCitasComponent implements OnInit {

  @Input() ListadoCitas : any;
  @Output() Eliminar = new EventEmitter<number>();

  constructor() {
    

   }

  ngOnInit(): void {
    
  }
  EliminarCita(index:number)
  {
    this.Eliminar.emit(index);
  }

}
