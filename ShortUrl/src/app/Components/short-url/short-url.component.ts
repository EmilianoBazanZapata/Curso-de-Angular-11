import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent implements OnInit {

  NombreUrl:string;
  UrlShort:string;
  UrlProcesada:boolean;
  constructor() 
  {
    this.NombreUrl = '';
    this.UrlShort = '';
    this.UrlProcesada = false;
  }

  ngOnInit(): void {
  }
  ProcesarUrl(){
    console.log(this.NombreUrl);
  }
}
