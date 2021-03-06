import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioComponent } from './Components/formulario/formulario.component';
import { ListadoNoticiasComponent } from './Components/listado-noticias/listado-noticias.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { SpinnerComponent } from './Shared/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListadoNoticiasComponent,
    NavBarComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
