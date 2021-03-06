import { Component } from '@angular/core';
import { NoticiaService } from './Srvices/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Noticias';

  constructor(private _NoticiaService:NoticiaService)
  {

  }
  //recibo el parametro del componente hijo
  BuscarNoticias(parametros:any)
  {
    this._NoticiaService.GetNoticias(parametros).subscribe(data => 
      {
        console.log(data)
      });
  }

}
