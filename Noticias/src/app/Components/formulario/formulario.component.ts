import { Component, OnInit, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  //creo un output para enviar los datos al evento padre
  @Output() ParametrosSeleccionados = new EventEmitter<any>();

  CategoriaSeleccionada='general';
  PaisSeleccionado='ar';
  categorias :any[]=
  [
    {value:'general' , nombre:'General'},
    {value:'business' , nombre:'Negocios'},
    {value:'entretainment' , nombre:'Entretenimiento'},
    {value:'health' , nombre:'Salud'},
    {value:'science' , nombre:'Ciencia'},
    {value:'sports' , nombre:'Deportes'},
    {value:'technology' , nombre:'Tecnologia'}
  ];

  paises:any[]=
  [
    {value:'ar' , nombre:'Argentina'},
    {value:'br' , nombre:'Brasil'},
    {value:'fr' , nombre:'Francia'},
    {value:'hu' , nombre:'Hungaria'},
    {value:'bmx' , nombre:'Mexico'},
    {value:'gb' , nombre:'Reino Unido'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

  BuscarNoticia()
  {
    //creo una constante para almacenar los datos
    const Parametros =
    {
      categoria:this.CategoriaSeleccionada,
      pais:this.PaisSeleccionado
    }
    //los envio al formulario padre
    this.ParametrosSeleccionados.emit(Parametros);
  }
}
