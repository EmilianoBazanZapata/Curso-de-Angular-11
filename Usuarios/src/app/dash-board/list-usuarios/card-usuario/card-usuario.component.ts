import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css']
})
export class CardUsuarioComponent implements OnInit {
  @Input() user:any;
  firstName:string;
  email:string;
  gender:string;
  ImgUrl='';
  constructor() { }

  ngOnInit(): void {
    this.firstName = this.user.name;
    this.email = this.user.email;
    this.gender = this.user.gender;
    if(this.gender ==='Male')
    {
      this.ImgUrl='https://www.segurosprismacr.com/wp-content/uploads/2020/12/iconfinder_website_-_male_business_3440841.png';
    }
    else
    {
      this.ImgUrl='https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png';
    }
  }

}
