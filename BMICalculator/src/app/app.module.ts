import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { ResultadoComponent } from './Components/resultado/resultado.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
