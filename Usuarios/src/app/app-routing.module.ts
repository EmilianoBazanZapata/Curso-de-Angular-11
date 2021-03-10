import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ListUsuariosComponent } from './dash-board/list-usuarios/list-usuarios.component';
import { UsuarioComponent } from './dash-board/usuario/usuario.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: 'layout', component: LayoutComponent },
  {
    path: 'dashboard', component: DashBoardComponent, children: [
      { path: '', component: ListUsuariosComponent },
      { path: 'usuario/:id', component: UsuarioComponent},
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'layout', pathMatch: 'full' },
  { path: '**', redirectTo: 'layout', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
