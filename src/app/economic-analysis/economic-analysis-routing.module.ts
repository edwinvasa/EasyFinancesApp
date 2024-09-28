import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EconomicAnalysisFormComponent } from './pages/economic-analysis-form/economic-analysis-form.component';

const routes: Routes = [
  {
    path: '',
    component: EconomicAnalysisFormComponent
  },
  {
    path: '**',
    redirectTo: 'economic-analysis'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EconomicAnalysisRoutingModule { }
