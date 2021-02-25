import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { ConvertidorComponent } from './Components/convertidor/convertidor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ConvertidorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
