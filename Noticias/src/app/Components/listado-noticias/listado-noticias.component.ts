import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-listado-noticias',
  templateUrl: './listado-noticias.component.html',
  styleUrls: ['./listado-noticias.component.css']
})
export class ListadoNoticiasComponent implements OnInit {

  @Input() ListNoticias:any;
  constructor() { }

  ngOnInit(): void {
  }

}
