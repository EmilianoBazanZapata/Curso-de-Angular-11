import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarGastoComponent } from './Components/gastos/ingresar-gasto/ingresar-gasto.component';
import { IngresarPresupuestoComponent } from './Components/ingresar-presupuesto/ingresar-presupuesto.component';

const routes: Routes = [
  {path: '' , redirectTo:'/IngresarPresupuesto', pathMatch:'full'},
  {path: 'IngresarPresupuesto', component : IngresarPresupuestoComponent } ,
  {path: 'Gastos' ,component : IngresarGastoComponent},
  {path: '**' , redirectTo:'IngresarPresupuesto', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
