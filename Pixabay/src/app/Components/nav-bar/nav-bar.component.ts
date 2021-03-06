import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input() Titulo : string;
  constructor(){
    this.Titulo = ''; 
 }

  ngOnInit(): void {
  }

}
