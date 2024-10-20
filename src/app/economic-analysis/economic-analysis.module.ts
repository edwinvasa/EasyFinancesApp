import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EconomicAnalysisRoutingModule } from './economic-analysis-routing.module';
import { EconomicAnalysisFormComponent } from './pages/economic-analysis-form/economic-analysis-form.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    EconomicAnalysisFormComponent,
  ],
  imports: [
    CommonModule,
    EconomicAnalysisRoutingModule,
    FormsModule,
    CurrencyMaskModule,
    SharedModule
  ],
  exports: [
  ],
  providers: [
  ]
})
export class EconomicAnalysisModule { }
