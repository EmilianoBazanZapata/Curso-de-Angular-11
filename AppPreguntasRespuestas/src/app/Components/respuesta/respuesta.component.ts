import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pregunta } from 'src/app/Models/Preunta';
import { Respuesta } from 'src/app/Models/Respuesta';
import { PreguntaService } from 'src/app/Services/pregunta.service';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent implements OnInit {

  ListPreguntas:Pregunta[];
  RespuestaUsuario:any[];
  constructor( private _PreguntaService:PreguntaService , private router:Router) { }

  ngOnInit(): void {
    this.ListPreguntas = this._PreguntaService.Preguntas;
    this.RespuestaUsuario = this._PreguntaService.RespuetsaUsuario;
    console.log(this.ListPreguntas);
    console.log(this.RespuestaUsuario);
  }
  Volver()
  {
    this._PreguntaService.RespuetsaUsuario=[];
    this.router.navigate(['/']);
  }
}
