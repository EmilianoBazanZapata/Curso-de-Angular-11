import { Component, OnInit } from '@angular/core';
import { TarjetaCrediro } from 'src/app/Models/TarjetaCredito';
import { TarjetaService } from 'src/app/Services/tarjeta.service';

@Component({
  selector: 'app-listar-tarjeta',
  templateUrl: './listar-tarjeta.component.html',
  styleUrls: ['./listar-tarjeta.component.css']
})
export class ListarTarjetaComponent implements OnInit {

  ListTarjeta: TarjetaCrediro[] = [];
  constructor(private _TarjetaService: TarjetaService) { }

  ngOnInit(): void {
    this.ObtenerTarjetas();
  }
  ObtenerTarjetas() {
    this._TarjetaService.ObtenerTarjetas().subscribe(data => {
      this.ListTarjeta = [];
      data.forEach((element: any) => {
        this.ListTarjeta.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.ListTarjeta);
    });
  }
}
