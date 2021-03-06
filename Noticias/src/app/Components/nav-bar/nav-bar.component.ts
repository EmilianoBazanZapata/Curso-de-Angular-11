import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  //el mesaje viene del componente padre
  @Input() Titulo:string;
  constructor() 
  {
    this.Titulo="";
  }

  ngOnInit(): void {
  }

}
