import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { promise } from 'selenium-webdriver';
import { TarjetaCrediro } from '../Models/TarjetaCredito';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  private Tarjeta$ = new Subject<any>();
  constructor(private firestore:AngularFirestore) 
  {

  }
  GuardarTarjeta(tarjeta:TarjetaCrediro): Promise<any>
  {
    return this.firestore.collection('tarjetas').add(tarjeta);
  }

  ObtenerTarjetas():Observable<any>
  {
    return this.firestore.collection('tarjetas', ref=> ref.orderBy('FechaCreacion','desc')).snapshotChanges();
  }
  EliminarTarjeta(id:string): Promise<any>
  {
   return  this.firestore.firestore.collection('tarjetas').doc(id).delete();
  }
  EditarTarjeta(tarjeta:TarjetaCrediro)
  {
    this.Tarjeta$.next(tarjeta);
  }
  TomarTarjetaEditar():Observable<TarjetaCrediro>
  {
    return this.Tarjeta$.asObservable();
  }
  ActualizarTrajeta(id:string, tarjeta:any):Promise<any>
  {
   return this.firestore.collection('tarjetas').doc(id).update(tarjeta);
  }
}
