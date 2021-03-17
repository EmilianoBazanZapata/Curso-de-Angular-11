import { Injectable } from '@angular/core';
import { Pregunta } from '../Models/Preunta';
import { Respuesta } from '../Models/Respuesta';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  IndexPregunta = 0;
  public Preguntas:Pregunta[]=
  [
    new Pregunta('Cual es la Capital de Argentina',[
      new Respuesta('Buenos Aires',1),
      new Respuesta('No se',0),
      new Respuesta('Montevideo',0),
      new Respuesta('Lima',0)
    ]),
    new Pregunta('Cual es la Capital de Francia',[
      new Respuesta('Roma',0),
      new Respuesta('Dublin',0),
      new Respuesta('Atenas',0),
      new Respuesta('Paris',1)
    ]),
    new Pregunta('Cual es la Capital de Egipto',[
      new Respuesta('Londres',0),
      new Respuesta('Berlin',0),
      new Respuesta('El Cairo',1),
      new Respuesta('CasaBlanca',0)
    ]),
    new Pregunta('¿ Ella te quiere ? ',[
      new Respuesta('No ',0),
      new Respuesta('Quizas en Otra vida',0),
      new Respuesta('Segui Soñando',0),
      new Respuesta('JAJAJAJAJA',1)
    ])
  ];
  constructor() { }

  GetPreguntas()
  {
    return this.Preguntas.slice();
  }
}
