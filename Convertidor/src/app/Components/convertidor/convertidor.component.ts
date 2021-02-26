import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {
  cantidad = 0;
  tengo = 'USD';
  quiero = 'EUR'
  total = 0;
  monedas :string[] =['USD' , 'LIB' , 'EUR'];
  constructor() { }

  ngOnInit(): void {
  }
  Convertir()
  {
    switch(this.tengo)
    {
      case'USD':
      if(this.quiero ==='USD')
      {
        this.total = this.cantidad;
      }
      if(this.quiero ==='EUR')
      {
        this.total = this.cantidad * 0.84
      }
      if(this.quiero ==='LIB')
      {
        this.total = this.cantidad * 0.75
      }
      break;

      case'LIB':
      if(this.quiero ==='LIB')
      {
        this.total = this.cantidad;
      }
      if(this.quiero ==='USD')
      {
        this.total = this.cantidad * 1.40;
      }
      if(this.quiero ==='EUR')
      {
        this.total = this.cantidad * 1.15;
      }
      break;

      case'EUR':
      if(this.quiero ==='EUR')
      {
        this.total = this.cantidad;
      }
      if(this.quiero ==='LIB')
      {
        this.total = this.cantidad * 0.87;
      }
      if(this.quiero ==='USD')
      {
        this.total = this.cantidad * 1.22;
      }
      break;
    }
  }
}
