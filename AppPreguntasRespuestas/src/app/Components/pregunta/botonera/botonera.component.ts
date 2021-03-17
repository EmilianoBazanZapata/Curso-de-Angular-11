import { Component, OnInit } from '@angular/core';
import { PreguntaService } from 'src/app/Services/pregunta.service';

@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.css']
})
export class BotoneraComponent implements OnInit {

  constructor(public _PreguntaService:PreguntaService) { }
  btnString='Aceptar';
  ngOnInit(): void {
  }
  Siguiente()
  {
    switch(this.btnString)
    {
      case'Aceptar':
      {
        this._PreguntaService.PregConfirmada = true;
        this.btnString = 'Siguiente';
      }
    }
  }
}
