import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //interpolacion del archivo ts al html INTERPOLACION
  /*nombre = 'Emiliano'
  

  //constructor()
  //
    //setInterval(()=> this.nombre = 'Ramiro',3000)
  //}

  getSuma(numero1:number , numero2:number)
  {
    return numero1 + numero2;
  }
  //interpolacion del archivo ts al html Binding
  textoPlaceHolder='Escriba algo Aqui'
  InputDeshabilitado = true;
  imgSrc= 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/AngularJS_logo.svg/1280px-AngularJS_logo.svg.png'

  constructor()
  {
    setInterval(()=> this.InputDeshabilitado = false,3000)
    setInterval(()=> this.nombre = 'Ramiro',3000)
  }*/

  /*texto ='Bienbenidos'
  CorrejirTexto():void
  {
    this.texto='Bienvenidos'
  }*/
  //texto='';
  listEstudiantes:any[]=
  [
    {
      nombre:'Andrea' , estado:'Desaprobado'
    },
    {
      nombre:'Lucas' , estado:'Regular'
    },
    {
      nombre:'Emiliano' , estado:'Desaprobado'
    },
    {
      nombre:'Daniel' , estado:'Aprobado'
    },
    {
      nombre:'Ni idea' , estado:'Libre'
    }
  ]
  mostrar = false;
  texto = 'mostrar tabla';
  toogle():void
  {
    this.mostrar = !this.mostrar;
    if(this.mostrar ===true)
    {
      this.texto = 'Ocultar Tabla';
    }
    else
    {
      this.texto = 'Mostrar Tabla';
    }

  }
}
