export class TarjetaCrediro
{
    id?:string;
    Titular:string;
    NumeroTarjeta:string;
    Cvv:number;
    FechaExpiracion:Date;
    FechaActualizacion:Date;

    constructor(Titular:string ,NumeroTarjeta:string , Cvv:number , FechaExpiracion:Date , FechaActualizacion:Date)
    {
        this.Titular = Titular;
        this.NumeroTarjeta = NumeroTarjeta;
        this.Cvv = Cvv;
        this.FechaExpiracion = new Date();
        this.FechaActualizacion = new Date();
    }

}