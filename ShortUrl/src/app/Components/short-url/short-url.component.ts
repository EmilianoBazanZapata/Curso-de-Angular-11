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
  constructor(private _ShortUrlServices:ShortUrlService) 
  {
    this.NombreUrl = '';
    this.UrlShort = '';
    this.UrlProcesada = false;
  }

  ngOnInit(): void {
  }
  ProcesarUrl(){
    this.UrlProcesada = false;
    this._ShortUrlServices.GetUrlShort(this.NombreUrl).subscribe(data =>{
      this.UrlProcesada = true;
      this.UrlShort = data.link;
    })
  }
}
