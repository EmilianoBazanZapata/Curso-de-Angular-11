import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { PreguntaComponent } from './Components/pregunta/pregunta.component';
import { RespuestaComponent } from './Components/respuesta/respuesta.component';

const routes: Routes = [
  {path:'dashboard',component:DashBoardComponent},
  {path:'pregunta',component:PreguntaComponent},
  {path:'respuesta',component:RespuestaComponent},
  {path:'',redirectTo:'/dashboard', pathMatch:'full'},
  {path:'**',redirectTo:'/dashboard', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
