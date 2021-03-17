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
    if(this._PreguntaService.PregConfirmada === true)
    {
      return;
    }
    this._PreguntaService.OpcionSeleccionada = Respuesta;
    this._PreguntaService.DeshabilitarBtn = false;
  }
  AddClassOption(Respuesta:Respuesta)
  {
    //respuesta seleccionada y no esta confirmada
    if(Respuesta === this._PreguntaService.OpcionSeleccionada && !this._PreguntaService.PregConfirmada)
    {
      return 'active text-light';
    }
    //respuesta correcta y esta confirmada
    if(Respuesta === this._PreguntaService.OpcionSeleccionada && this._PreguntaService.PregConfirmada &&this._PreguntaService.OpcionSeleccionada.EsCorrecta === 1)
    {
      return 'list-group-item-success';
    }
    //respuesta incorrecta y esta confirmada
    if(Respuesta === this._PreguntaService.OpcionSeleccionada && this._PreguntaService.PregConfirmada &&this._PreguntaService.OpcionSeleccionada.EsCorrecta === 0)
    {
      return 'list-group-item-danger';
    }
  }
  IconCorrecta(Respuesta:Respuesta)
  {
    //respuesta correcta y esta confirmada
    if(Respuesta === this._PreguntaService.OpcionSeleccionada && this._PreguntaService.PregConfirmada &&this._PreguntaService.OpcionSeleccionada.EsCorrecta === 1)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  IconIncorrecta(Respuesta:Respuesta)
  {
    //respuesta correcta y esta confirmada
    if(Respuesta === this._PreguntaService.OpcionSeleccionada && this._PreguntaService.PregConfirmada &&this._PreguntaService.OpcionSeleccionada.EsCorrecta === 0)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}
