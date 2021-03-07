import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar-imagen',
  templateUrl: './buscar-imagen.component.html',
  styleUrls: ['./buscar-imagen.component.css']
})
export class BuscarImagenComponent implements OnInit {

  NombreImagen:string;
  constructor() 
  {
    this.NombreImagen='';
  }

  ngOnInit(): void {
  }
  BuscarImagenes()
  {
    console.log(this.NombreImagen);
  }
}
