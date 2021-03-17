import { Respuesta } from "./Respuesta";

export class Pregunta
{
    Descripcion:string;
    Respuestas:Respuesta[];
    public(Descripcion:string ,Respuestas:Respuesta[])
    {
        this.Descripcion = Descripcion;
        this.Respuestas = Respuestas;
    }
}