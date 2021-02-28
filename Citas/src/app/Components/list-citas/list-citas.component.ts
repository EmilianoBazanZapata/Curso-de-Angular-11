import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrls: ['./list-citas.component.css']
})
export class ListCitasComponent implements OnInit {

  @Input() ListadoCitas : any;
  constructor() {
    

   }

  ngOnInit(): void {
    
  }

}
