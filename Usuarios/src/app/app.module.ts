import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { FooterComponent } from './dash-board/footer/footer.component';
import { NavBarComponent } from './dash-board/nav-bar/nav-bar.component';
import { ListUsuariosComponent } from './dash-board/list-usuarios/list-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    FooterComponent,
    NavBarComponent,
    ListUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
