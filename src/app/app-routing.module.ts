import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankInterestRatesComponent } from './info-tasas/pages/bank-interest-rates/bank-interest-rates.component';
import { SubscribeNotificationsComponent } from './info-tasas/subscribe-notifications/subscribe-notifications.component';
import { UnsubscribeNotificationsComponent } from './info-tasas/unsubscribe-notifications/unsubscribe-notifications.component';
import { HomeComponent } from './pages/home/home.component';
import { MainBudgetComponent } from './budgets/main-budget/main-budget.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'budget', component: MainBudgetComponent, canActivate: [AuthGuard] },
  {
    path: 'budgets',
    loadChildren: () => import('./budgets/budgets.module').then((m) => m.BudgetsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'credit-management',
    loadChildren: () => import('./gestion-credito/gestion-credito.module').then(m => m.GestionCreditoModule)
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
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
