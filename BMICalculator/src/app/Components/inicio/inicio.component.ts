import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  edad = 25;
  peso = 60;
  altura= 170;
  constructor() { }

  ngOnInit(): void {
  }
  cambiarAltura(event:any)
  {
    this.altura = event.target.value;
  }

}
