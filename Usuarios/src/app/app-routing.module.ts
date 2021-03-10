import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {path: 'layout' , component:LayoutComponent},
  {path: 'dashboard' , component:DashBoardComponent},
  {path: '' , redirectTo :'layout' , pathMatch:'full'},
  {path: '**' , redirectTo :'layout' , pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
