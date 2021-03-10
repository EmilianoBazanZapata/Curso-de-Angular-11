import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css']
})
export class CardUsuarioComponent implements OnInit {

  ImgUrl='https://static.independent.co.uk/2021/01/31/15/newFile-8.jpg?width=640&auto=webp&quality=75';
  constructor() { }

  ngOnInit(): void {
  }

}
