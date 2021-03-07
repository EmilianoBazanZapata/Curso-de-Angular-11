import { Component, OnInit } from '@angular/core';
import { ImagenService } from 'src/app/Services/imagen.service';

@Component({
  selector: 'app-buscar-imagen',
  templateUrl: './buscar-imagen.component.html',
  styleUrls: ['./buscar-imagen.component.css']
})
export class BuscarImagenComponent implements OnInit {

  NombreImagen:string;
  constructor(private _ImagenService:ImagenService) 
  {
    this.NombreImagen='';
  }

  ngOnInit(): void {
  }
  BuscarImagenes()
  {
    if(this.NombreImagen ==='')
    {
      //envio el error al service
      this._ImagenService.SetError('Debe ingresar Un Parametro de Busqueda');
      return;
    }
    //envio el valor del input a service
    this._ImagenService.EnviarTerminoBusqueda(this.NombreImagen);
  }
}
