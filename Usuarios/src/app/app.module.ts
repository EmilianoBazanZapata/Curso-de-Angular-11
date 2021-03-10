import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { FooterComponent } from './dash-board/footer/footer.component';
import { NavBarComponent } from './dash-board/nav-bar/nav-bar.component';
import { ListUsuariosComponent } from './dash-board/list-usuarios/list-usuarios.component';
import { LayoutComponent } from './layout/layout.component';
import { CardUsuarioComponent } from './dash-board/list-usuarios/card-usuario/card-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    FooterComponent,
    NavBarComponent,
    ListUsuariosComponent,
    LayoutComponent,
    CardUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
