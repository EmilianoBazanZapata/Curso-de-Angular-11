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
  titulo='Agregar Tarjeta';
  id:string | undefined;

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

  ngOnInit(): void 
  {
    this._TarjetaService.TomarTarjetaEditar().subscribe(data =>
      {
        this.id = data.id;
        this.titulo='Editar Tarjeta';
        this.form.patchValue({
          titular:data.Titular,
          numeroTarjeta:data.NumeroTarjeta,
          fechaExpiracion:data.FechaExpiracion,
          Cvv:data.Cvv
        })
        console.log(data)
      });
  }
  GuardarTarjeta()
  {
    if(this.id=== undefined)
    {
      this.CrearTarjeta();
    }
    else
    {
      this.EditarTarjeta(this.id);
    }
  }
  EditarTarjeta(id:string)
  {
    const Tarjeta: any =
    {
      Titular:this.form.value.titular,
      NumeroTarjeta:this.form.value.numeroTarjeta,
      FechaExpiracion:this.form.value.fechaExpiracion,
      Cvv:this.form.value.Cvv,
      FechaActualizacion:new Date()
    }
    this.loading=true;
    this._TarjetaService.ActualizarTrajeta(id,Tarjeta).then(()=>
    {
      this.loading = false;
      this.titulo="Agregar Tarejta";
      this.form.reset();
      this.id = undefined;
      this.toastr.info('Se Actualizo Exitosamente el registro', 'se registro esxitosamente la tarjeta');
    },error =>
    {
      console.log(error);
    });
  }



  CrearTarjeta()
    {
      const Tarjeta: TarjetaCrediro =
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
      this.titulo ='Agregar Tarjeta';
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
