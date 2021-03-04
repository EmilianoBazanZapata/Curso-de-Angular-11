import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ShortInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const Token ='f01bdf15e54e6c20ed61f6eb105216f5ef36c3ad';

    request = request.clone({setHeaders:{Authorization: 'Bearer '+ Token}})
    return next.handle(request);
  }
}
