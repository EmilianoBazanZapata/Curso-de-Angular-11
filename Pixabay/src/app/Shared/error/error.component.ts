import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImagenService } from 'src/app/Services/imagen.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit , OnDestroy{

  Texto='';
  Mostrar=false;
  Suscripcion : Subscription;
  constructor(private _ImagenService : ImagenService) 
  {
    this.Suscripcion = this._ImagenService.GetError().subscribe(data =>
      {
        this.Mostrar = true;
        setTimeout(() => {
          this.CerrarAdvertencia();
        }, 5000);
        this.Texto = data;
      });
  }

  ngOnInit(): void {
  }
  ngOnDestroy():void
  {
    //se destruye la subscripcion al terminar la operacion
    this.Suscripcion.unsubscribe();
  }
  CerrarAdvertencia()
  {
    this.Mostrar = false;
  }

}
