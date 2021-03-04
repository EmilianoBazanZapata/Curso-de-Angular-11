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
  MostrarAdvertencia: boolean;
  MostrarError:boolean;
  constructor(private _ShortUrlServices: ShortUrlService) {
    this.NombreUrl = '';
    this.UrlShort = '';
    this.UrlProcesada = false;
    this.Loading = false;
    this.MostrarAdvertencia = false;
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
        this.MostrarAdvertencia = true;
        this.Loading = false;
        //a los 4 segundos quito la advertencia del campo vacio 
        setTimeout(() => {
          this.MostrarAdvertencia = false;
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
    },error=>
    {
      console.log(error.error.description);
      if(error.error.description ==='The value provided is invalid.')
      {
        this.MostrarError = true;
        setTimeout(() => {
          this.MostrarError = false;
        }, 3000);
      }
      this.Loading = false;
    }
    )
  }

  error(valor:string)
  {

  }
}
