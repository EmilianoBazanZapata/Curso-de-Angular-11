export class Empleado
{
    Legajo:number;
    Nombre:string;
    Apellido:string;
    Sexo:string;
    Salario:number;
    
    constructor(legajo:number , nombre:string , apellido:string , sexo:string , salario:number)
    {
        this.Legajo = legajo;
        this.Nombre = nombre;
        this.Apellido = apellido;
        this.Sexo = sexo;
        this.Salario = salario;
    }
}