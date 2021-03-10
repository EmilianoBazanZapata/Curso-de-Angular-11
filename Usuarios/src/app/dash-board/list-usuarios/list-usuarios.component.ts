import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit {

  constructor(private _UsuarioService: UsuarioService) { }
  listUsuarios: any[] = [];
  ngOnInit(): void {
    this.GetUusuario();
  }
  GetUusuario(): void {
    this._UsuarioService.GetUsuarios().subscribe(data => {
      this.listUsuarios = data.data;
      console.log(data);
    })
  }
}
