import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TarjetaCrediro } from 'src/app/Models/TarjetaCredito';
import { TarjetaService } from 'src/app/Services/tarjeta.service';

@Component({
  selector: 'app-listar-tarjeta',
  templateUrl: './listar-tarjeta.component.html',
  styleUrls: ['./listar-tarjeta.component.css']
})
export class ListarTarjetaComponent implements OnInit {

  ListTarjeta: TarjetaCrediro[] = [];
  constructor(private _TarjetaService: TarjetaService,
              private toastr:ToastrService) { }

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
  EliminarTarjeta(id:any)
  {
    this._TarjetaService.EliminarTarjeta(id).then(()=>
    {
      this.toastr.error('Regsitro eliminado Exitosamente', 'La tarjeta fue eliminada con Exito');
    }, error =>{
      console.log(error);
    });
  }
  EditarTarjeta(tarjeta:TarjetaCrediro)
  {
    this._TarjetaService.EditarTarjeta(tarjeta);
  }
}
