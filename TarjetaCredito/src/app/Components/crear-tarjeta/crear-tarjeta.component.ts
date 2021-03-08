import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TarjetaCrediro } from 'src/app/Models/TarjetaCredito';
import { TarjetaService } from 'src/app/Services/tarjeta.service';

@Component({
  selector: 'app-crear-tarjeta',
  templateUrl: './crear-tarjeta.component.html',
  styleUrls: ['./crear-tarjeta.component.css']
})
export class CrearTarjetaComponent implements OnInit {

  form:FormGroup;

  constructor(private fb:FormBuilder ,
              private _TarjetaService:TarjetaService,
              private toastr: ToastrService) 
  {
    this.form = this.fb.group({
      titular:['',Validators.required],
      numeroTarjeta:['',[Validators.required,Validators.minLength(16),Validators.maxLength(16)]],
      fechaExpiracion:['',[Validators.required,Validators.minLength(5),Validators.maxLength(5)]],
      Cvv:['',[Validators.required,Validators.minLength(3),Validators.maxLength(3)]],
    });
  }

  ngOnInit(): void {
  }
  CrearTarjeta()
  {
    const Tarjeta:TarjetaCrediro=
    {
      Titular:this.form.value.titular,
      NumeroTarjeta:this.form.value.numeroTarjeta,
      FechaExpiracion:this.form.value.fechaExpiracion,
      Cvv:this.form.value.Cvv,
      FechaCreacion :new Date(),
      FechaActualizacion:new Date()
    }
    this._TarjetaService.GuardarTarjeta(Tarjeta).then(()=>
    {
      console.log('tarjeta registrada');
      this.toastr.success('La Tarjeta fue Registrada Exitosamente','Tarjeta Registrada');
      this.form.reset();
    });
  }

}
