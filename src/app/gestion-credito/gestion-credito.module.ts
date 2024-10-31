import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GestionCreditoRoutingModule } from './gestion-credito-routing.module';
import { InfoCreditoActualComponent } from './pages/info-credito-actual/info-credito-actual.component';
import { AnalisisCreditoComponent } from './pages/analisis-credito/analisis-credito.component';
import { SharedTableComponent } from './components/shared-table/shared-table.component';
import { TablaAmortizacionComponent } from './pages/tabla-amortizacion/tabla-amortizacion.component';
import { SharedModule } from '../shared/shared.module';
import { CurrencyMaskModule } from 'ng2-currency-mask';



@NgModule({
  declarations: [
    InfoCreditoActualComponent,
    AnalisisCreditoComponent,
    SharedTableComponent,
    TablaAmortizacionComponent,
  ],
  imports: [
    CommonModule,
    CurrencyMaskModule,
    FormsModule,
    GestionCreditoRoutingModule,
    SharedModule
  ],
  exports: [
    InfoCreditoActualComponent,
    AnalisisCreditoComponent,
    SharedTableComponent,
    TablaAmortizacionComponent,
  ]
})
export class GestionCreditoModule { }
