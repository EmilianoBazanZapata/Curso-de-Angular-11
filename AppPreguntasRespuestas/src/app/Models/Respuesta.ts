export class Respuesta
{
    Nombre:string;
    EsCorrecta:number;

    constructor(Nombre:string,EsCorrecta:number)
    {
        this.Nombre = Nombre;
        this.EsCorrecta = EsCorrecta;
    }
}