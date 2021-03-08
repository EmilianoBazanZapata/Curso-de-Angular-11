import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
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

  ObtenerTarjetas():Observable<any>
  {
    return this.firebase.collection('tarjetas', ref=> ref.orderBy('FechaCreacion','desc')).snapshotChanges();
  }
}
