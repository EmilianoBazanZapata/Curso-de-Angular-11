import { Component, OnInit , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {
  Nombre='';
  Fecha='';
  Hora='';
  Sintomas='';

  FormularioIncorrecto =false;
  //pasamos los datos al padre
  @Output() nuevaCita = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  AgregarCita()
  {
    if(this.Nombre ==''|| this.Fecha =='' || this.Hora =='' || this.Sintomas=='')
    {
      this.FormularioIncorrecto = true
      return;
    }
    this.FormularioIncorrecto = false;
   
    //creamos un objeto para pasarlo al padre

    const Cita =
    {
      nombre: this.Nombre,
      fecha: this.Fecha,
      hora: this.Hora,
      sintomas: this.Sintomas
      
    }
    console.log(Cita);
    this.nuevaCita.emit(Cita);
    this.ResetCampos();
    
  }
  ResetCampos()
    {
      this.Nombre='',
      this.Hora ='',
      this.Fecha = '',
      this.Sintomas=''
    }

}
