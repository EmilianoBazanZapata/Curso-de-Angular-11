import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { ShortUrlComponent } from './Components/short-url/short-url.component';
import { SpinnerComponent } from './Components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ShortUrlComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
