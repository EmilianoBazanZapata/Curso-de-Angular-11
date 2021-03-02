import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  UrlImagen = 'https://image.flaticon.com/icons/png/512/1116/1116453.png';
  Ciudad = '';
  constructor() { }

  ngOnInit(): void {
  }
  ObtenerClima()
  {
    console.log(this.Ciudad);
  }

}
