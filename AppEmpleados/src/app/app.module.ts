import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AddEditEmpleadoComponent } from './Components/add-edit-empleado/add-edit-empleado.component';
import { ListEmpleadoComponent } from './Components/list-empleado/list-empleado.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { MensajeConfirmacionComponent } from './Components/Shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { AngularMaterialModule } from './Components/Shared/angular-material/angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    AddEditEmpleadoComponent,
    ListEmpleadoComponent,
    NavBarComponent,
    MensajeConfirmacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
