import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { promise } from 'selenium-webdriver';
import { TarjetaCrediro } from '../Models/TarjetaCredito';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  constructor(private firebase:AngularFirestore) 
  {

  }
  GuardarTarjeta(tarjeta:TarjetaCrediro): Promise<any>
  {
    return this.firebase.collection('tarjetas').add(tarjeta);
  }
}
