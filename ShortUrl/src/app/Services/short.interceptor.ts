import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ShortInterceptor implements HttpInterceptor {

  constructor() {}
//muestro los errores
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const Token ='f01bdf15e54e6c20ed61f6eb105216f5ef36c3ad';

    request = request.clone({setHeaders:{Authorization: 'Bearer '+ Token}})
    return next.handle(request).pipe(catchError((error:HttpErrorResponse)=>
    {
      console.log(error);
      return throwError(error);
    }));
  }
}
