import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PreguntaService } from 'src/app/Services/pregunta.service';

@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.css']
})
export class BotoneraComponent implements OnInit {

  constructor(public _PreguntaService:PreguntaService,private router:Router) { }
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
        if(this._PreguntaService.Preguntas.length-1 == this._PreguntaService.IndexPregunta)
        {
          this.btnString ='Finalizar';
        }
        break;
      }
      case'Siguiente':
      {
        this._PreguntaService.IndexPregunta++;
        this._PreguntaService.RespuetsaUsuario.push(this._PreguntaService.IndexRespuesta);
        this._PreguntaService.DeshabilitarBtn = true;
        this._PreguntaService.PregConfirmada = false;
        this.btnString = 'Aceptar';
        break;
      }
      case'Finalizar':
      {
        this._PreguntaService.RespuetsaUsuario.push(this._PreguntaService.IndexRespuesta);
        this.router.navigate(['/respuesta']);
      }
    }
  }
}
