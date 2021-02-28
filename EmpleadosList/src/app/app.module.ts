import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmpleadoListComponent } from './Components/empleado-list/empleado-list.component';

import { CountEmpleadosComponent } from './Components/empleado-list/count-empleados/count-empleados.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpleadoListComponent,
    CountEmpleadosComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
