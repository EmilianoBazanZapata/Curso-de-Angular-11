import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { PreguntaComponent } from './Components/pregunta/pregunta.component';
import { RespuestaComponent } from './Components/respuesta/respuesta.component';
import { BotoneraComponent } from './Components/Pregunta/botonera/botonera.component';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    NavBarComponent,
    PreguntaComponent,
    RespuestaComponent,
    BotoneraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
