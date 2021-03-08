export class TarjetaCrediro
{
    id?:string;
    Titular:string;
    NumeroTarjeta:string;
    Cvv:number;
    FechaExpiracion:string;
    FechaCreacion:Date;
    FechaActualizacion:Date;

    constructor(Titular:string ,NumeroTarjeta:string , Cvv:number , FechaExpiracion:string)
    {
        this.Titular = Titular;
        this.NumeroTarjeta = NumeroTarjeta;
        this.Cvv = Cvv;
        this.FechaExpiracion = FechaExpiracion;
        this.FechaCreacion = new Date();
        this.FechaActualizacion = new Date();

    }

}