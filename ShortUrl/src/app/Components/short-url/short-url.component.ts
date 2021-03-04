import { Component, OnInit } from '@angular/core';
import { ShortUrlService } from 'src/app/Services/short-url.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent implements OnInit {

  NombreUrl:string;
  UrlShort:string;
  UrlProcesada:boolean;
  Loading:boolean;
  constructor(private _ShortUrlServices:ShortUrlService) 
  {
    this.NombreUrl = '';
    this.UrlShort = '';
    this.UrlProcesada = false;
    this.Loading = false;
  }

  ngOnInit(): void {
  }
  ProcesarUrl(){
    this.Loading = true;
    this.UrlProcesada = false;

    setTimeout(() => {
      this.ObtenerUrlShort();
    },5000);
  }
  ObtenerUrlShort()
  {
    this._ShortUrlServices.GetUrlShort(this.NombreUrl).subscribe(data =>{
      this.UrlProcesada = true;
      this.UrlShort = data.link;
      this.Loading = false;
    })
  }
}
