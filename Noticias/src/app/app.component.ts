import { Component } from '@angular/core';
import { NoticiaService } from './Srvices/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Noticias';
  ListNoticias:any[]=
  [

  ];
  loading = false;

  constructor(private _NoticiaService:NoticiaService)
  {
    
  }
  //recibo el parametro del componente hijo
  BuscarNoticias(parametros:any)
  {
    this.loading = true;
    this.ListNoticias= [];
    setTimeout(() => {
      this._NoticiaService.GetNoticias(parametros).subscribe(data => 
        {
          this.loading = false;
          //este listado de noticias se lo envio el componente hijo
          this.ListNoticias = data.articles;
        }, error=>
        {
          console.log(error)
          this.loading= false;
        }
        );
    },3000);

    
  }

}
