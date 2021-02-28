import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ListCitas:any[] =[];
  AgregarCita(Cita:any)
  {
    this.ListCitas.push(Cita);
  }
  EliminarCita(index:number)
  {
    this.ListCitas.splice(index,1);
  }
}
