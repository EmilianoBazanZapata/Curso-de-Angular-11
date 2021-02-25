import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dadoIzquierda='../assets/Img/dice1.png';
  dadoDerecha='../assets/Img/dice1.png';
  numero1 = 3;
  numero2 = 5;

  TirarDados():void
  {
    this.numero1 = Math.round(Math.random() * 5)+1;
    this.numero2 = Math.round(Math.random() * 5)+1;
    this.dadoIzquierda ='../assets/Img/dice'+ this.numero1 +'.png';
    this.dadoDerecha ='../assets/Img/dice'+ this.numero2 +'.png';
  }
}
