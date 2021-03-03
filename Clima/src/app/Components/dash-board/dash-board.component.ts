import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/Services/clima.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  UrlImagen = 'https://image.flaticon.com/icons/png/512/1116/1116453.png';
  Ciudad = '';
  Loading = false;
  Temperatura:number;
  Humedad:number;
  Clima:number;
  Tarjeta:boolean;
  constructor(private _ClimaService:ClimaService) 
  {
    this.Temperatura = 0;
    this.Humedad = 0;
    this.Clima = 0;
  }

  ngOnInit(): void {
  }
  ObtenerClima()
  {
   this.Loading = true;
    this._ClimaService.GetClima(this.Ciudad).subscribe(data=>
      {
        this.Loading = false;
        this.Temperatura = data.main.temp - 273;
        this.Humedad = data.main.humidity;
        this.Clima = data.weather[0].main;
      });
  }

}
