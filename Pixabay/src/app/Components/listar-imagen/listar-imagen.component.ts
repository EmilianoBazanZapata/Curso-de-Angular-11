import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImagenService } from 'src/app/Services/imagen.service';

@Component({
  selector: 'app-listar-imagen',
  templateUrl: './listar-imagen.component.html',
  styleUrls: ['./listar-imagen.component.css']
})
export class ListarImagenComponent implements OnInit {

  Termino='';
  subscription : Subscription;
  constructor(private _ImagenService:ImagenService) 
  {
    this.subscription = this._ImagenService.GetTerminoBusqueda().subscribe(data =>{
      console.log(data);
    });
  }

  ngOnInit(): void {
  }

}
