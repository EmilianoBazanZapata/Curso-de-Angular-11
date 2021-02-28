import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PresupuestoService } from 'src/app/Services/presupuesto.service';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.css']
})
export class ListarGastoComponent implements OnInit , OnDestroy{

  subscription : Subscription;
  Presupuesto:number;
  Restante:number;
  ListGastos:any[] = [];
  constructor(private _PresupuestoService:PresupuestoService) 
  {
    this.Presupuesto = 0;
    this.Restante = 0;
    this.subscription =  this._PresupuestoService.GetGastos().subscribe(data =>
      {
        this.Restante = this.Restante - data.cantidad
        this.ListGastos.push(data);
      })
  }

  
  ngOnInit(): void {
    this.Presupuesto = this._PresupuestoService.Presupuesto;
    this.Restante = this._PresupuestoService.Restante;
  }
  ngOnDestroy(): void
  {
    this.subscription.unsubscribe();
  }
}
