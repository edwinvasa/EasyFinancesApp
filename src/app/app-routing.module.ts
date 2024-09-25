import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankInterestRatesComponent } from './info-tasas/pages/bank-interest-rates/bank-interest-rates.component';
import { SubscribeNotificationsComponent } from './info-tasas/subscribe-notifications/subscribe-notifications.component';
import { UnsubscribeNotificationsComponent } from './info-tasas/unsubscribe-notifications/unsubscribe-notifications.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/credit-management',
    pathMatch: 'full'
  },
  {
    path: 'credit-management',
    loadChildren: () => import('./GestionCredito/gestion-credito.module').then(m => m.GestionCreditoModule)
  },
  {
    path: 'economic-analysis',
    loadChildren: () => import('./economic-analysis/economic-analysis.module').then(m => m.EconomicAnalysisModule)
  },
  {
    path: 'info-tasas/bank-interest-rates',
    component: BankInterestRatesComponent
  },
  {
    path: 'info-tasas/subscribe',
    component: SubscribeNotificationsComponent
  },
  {
    path: 'info-tasas/unsubscribe',
    component: UnsubscribeNotificationsComponent
  },
  {
    path: '**',
    redirectTo: 'credit-management' // Redirige cualquier ruta desconocida al módulo de gestión de crédito
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
