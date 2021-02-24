import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Piano';
  alicarSonido(numero:number):void
  {
    //creo una constante de audio
    const audio: any = new Audio();
    //le asigno el numero a tocar
    audio.src ='../assets/Sonidos/note' + numero +'.wav';
    //cargo el audio
    audio.load();
    //ejecuto el audio
    audio.play();
  }
}
