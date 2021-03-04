import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { ShortUrlComponent } from './Components/short-url/short-url.component';
import { ShortInterceptor } from './Services/short.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ShortUrlComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:ShortInterceptor,
      multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
