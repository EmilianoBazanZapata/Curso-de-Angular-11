import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CrearTarjetaComponent } from './Components/crear-tarjeta/crear-tarjeta.component';
import { ListarTarjetaComponent } from './Components/listar-tarjeta/listar-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearTarjetaComponent,
    ListarTarjetaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
