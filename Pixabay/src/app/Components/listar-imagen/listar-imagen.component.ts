import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImagenService } from 'src/app/Services/imagen.service';

@Component({
  selector: 'app-listar-imagen',
  templateUrl: './listar-imagen.component.html',
  styleUrls: ['./listar-imagen.component.css']
})
export class ListarImagenComponent implements OnInit {

  Termino = '';
  subscription: Subscription;
  ListImagenes:any[] = [];
  constructor(private _ImagenService: ImagenService) {
    this.subscription = this._ImagenService.GetTerminoBusqueda().subscribe(data => {
      console.log(data);
      this.Termino = data;
      this.ObtenerImagenes();
    });
  }

  ngOnInit(): void {
  }
  ObtenerImagenes() {
    this._ImagenService.GetImagenes(this.Termino).subscribe(data => 
      {
        console.log(data);
        if(data.hits.length === 0)
        {
          this._ImagenService.SetError('Opss... no encontramos un resultado con ese termino de Busqueda');
          return;
        }

        this.ListImagenes = data.hits;


      }, error=>
      {
        this._ImagenService.SetError('Ocurrio un Error , El servidor se encuentra momentaneamente fuera de servicio');
      });
  }
}
