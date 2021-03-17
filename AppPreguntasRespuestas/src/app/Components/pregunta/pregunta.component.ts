import { Component, OnInit } from '@angular/core';
import { Pregunta } from 'src/app/Models/Preunta';
import { Respuesta } from 'src/app/Models/Respuesta';
import { PreguntaService } from 'src/app/Services/pregunta.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {

  ListPregunta:Pregunta[];
  constructor(public _PreguntaService:PreguntaService) { }

  ngOnInit(): void {
    this.ListPregunta = this._PreguntaService.GetPreguntas();
  }

  ObtenerPregunta()
  {
    return this.ListPregunta[this._PreguntaService.IndexPregunta].Descripcion;
  }
  RespuestaSeleccionada(Respuesta : Respuesta)
  {
    this._PreguntaService.OpcionSeleccionada = Respuesta;
    this._PreguntaService.DeshabilitarBtn = false;
  }
  AddClassOption(Respuesta:Respuesta)
  {
    if(Respuesta === this._PreguntaService.OpcionSeleccionada)
    {
      return 'active text-light';
    }
  }
}
