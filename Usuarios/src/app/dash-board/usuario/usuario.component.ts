import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  id: number;
  firstName: string;
  email: string;
  gender: string;
  ImgUrl: string;
  loading = true;
  constructor(private aRoute: ActivatedRoute,
    private _UsuarioService: UsuarioService) {
    this.id = +this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.GetUsuario();
  }
  GetUsuario(): void {
    setTimeout(() => {
      this._UsuarioService.GetUsuario(this.id).subscribe(data => {
        console.log(data);
        this.firstName = data.data.name;
        this.email = data.data.email;
        this.gender = data.data.gender;
        console.log(this.firstName)
        if (this.gender === 'Male') {
          this.ImgUrl = 'https://www.segurosprismacr.com/wp-content/uploads/2020/12/iconfinder_website_-_male_business_3440841.png';
        }
        else {
          this.ImgUrl = 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png';
        }
        this.loading = false;
      })
    }, 2000);

  }

}
