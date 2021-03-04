import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {

  Url ='https://api-ssl.bitly.com/v4/shorten';
  Token='f01bdf15e54e6c20ed61f6eb105216f5ef36c3ad';
  constructor() { }
}
