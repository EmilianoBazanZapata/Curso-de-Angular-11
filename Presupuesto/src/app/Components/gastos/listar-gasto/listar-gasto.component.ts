import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/Services/presupuesto.service';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.css']
})
export class ListarGastoComponent implements OnInit {

  constructor(private _PresupuestoService:PresupuestoService) { }

  ngOnInit(): void {
    this._PresupuestoService.GetGastos().subscribe(data =>
      {
        console.log(data);
      })
  }
}
