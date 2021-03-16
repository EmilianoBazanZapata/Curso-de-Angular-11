import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
