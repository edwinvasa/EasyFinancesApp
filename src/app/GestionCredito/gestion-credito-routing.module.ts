import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionCreditoMainComponent } from '../GestionCredito/pages/gestion-credito-main/gestion-credito-main.component';
import { InfoCreditoActualComponent } from '../GestionCredito/pages/info-credito-actual/info-credito-actual.component';
import { AnalisisCreditoComponent } from '../GestionCredito/pages/analisis-credito/analisis-credito.component';
import { TablaAmortizacionComponent } from '../GestionCredito/pages/tabla-amortizacion/tabla-amortizacion.component';


const routes: Routes = [
  {
    path: '',
    component: GestionCreditoMainComponent,
    children: [
      { path: '', redirectTo: 'info', pathMatch: 'full' },
      { path: 'info', component: InfoCreditoActualComponent },
      { path: 'analisis-credito', component: AnalisisCreditoComponent },
      { path: 'amortizacion', component: TablaAmortizacionComponent }
    ]
  },
  {
    path: '**',
    redirectTo: 'info'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionCreditoRoutingModule { }
