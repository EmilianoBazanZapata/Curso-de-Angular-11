import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //interpolacion del archivo ts al html
  nombre = 'Emiliano'

  constructor()
  {
    setInterval(()=> this.nombre = 'Ramiro',3000)
  }

  getSuma(numero1:number , numero2:number)
  {
    return numero1 + numero2;
  }
}
