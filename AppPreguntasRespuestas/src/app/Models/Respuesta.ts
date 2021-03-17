export class Respuesta
{
    Nombre:string;
    EsCorrecta:number;

    public(Nombre:string,EsCorrecta:number)
    {
        this.Nombre = Nombre;
        this.EsCorrecta = EsCorrecta;
    }
}