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
  loading = false;

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
    this.loading = true;
    setTimeout(() => {
      this._TarjetaService.GuardarTarjeta(Tarjeta).then(()=>
    {
      this.loading = false;
      this.toastr.success('La Tarjeta fue Registrada Exitosamente','Tarjeta Registrada');
      this.form.reset();
    }, error =>
    {
      this.loading = false;
      this.toastr.error('Opps... Ocurrio un Error','Un error ocurrio al momento de agrgar el dato');
      this.form.reset();
      console.log(error);
    });
    }, 3000);
    
  }

}
