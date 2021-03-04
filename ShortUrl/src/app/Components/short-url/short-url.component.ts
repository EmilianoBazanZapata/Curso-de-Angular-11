import { Component, OnInit } from '@angular/core';
import { ShortUrlService } from 'src/app/Services/short-url.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent implements OnInit {

  NombreUrl: string;
  UrlShort: string;
  UrlProcesada: boolean;
  Loading: boolean;
  MostrarError: boolean;
  constructor(private _ShortUrlServices: ShortUrlService) {
    this.NombreUrl = '';
    this.UrlShort = '';
    this.UrlProcesada = false;
    this.Loading = false;
    this.MostrarError = false;
  }

  ngOnInit(): void {
  }
  ProcesarUrl() {
    this.Loading = true;
    this.UrlProcesada = false;

    //a los 3 segundo muestro el resultado y dejo en blanco el textbox
    setTimeout(() => {
      //validar URL vacia
      if (this.NombreUrl === '') {
        this.MostrarError = true;
        this.Loading = false;
        //a los 4 segundos quito la advertencia del campo vacio 
        setTimeout(() => {
          this.MostrarError = false;
        }, 4000);
        return;
      }
      else {
        this.ObtenerUrlShort();
        this.NombreUrl = '';
      }

    }, 3000);
  }
  ObtenerUrlShort() {

    this._ShortUrlServices.GetUrlShort(this.NombreUrl).subscribe(data => {
      this.UrlProcesada = true;
      this.UrlShort = data.link;
      this.Loading = false;
    })
  }
}
