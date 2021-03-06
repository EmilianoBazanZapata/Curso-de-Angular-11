import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BuscarImagenComponent } from './Components/buscar-imagen/buscar-imagen.component';
import { ListarImagenComponent } from './Components/listar-imagen/listar-imagen.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { ErrorComponent } from './Shared/error/error.component';
import { SpinnerComponent } from './Shared/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscarImagenComponent,
    ListarImagenComponent,
    NavBarComponent,
    ErrorComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
