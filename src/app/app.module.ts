import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeEsCO from '@angular/common/locales/es-CO';
import { CURRENCY_MASK_CONFIG, CurrencyMaskConfig } from 'ng2-currency-mask';

import { AppRoutingModule } from './app-routing.module';
import { GestionCreditoModule } from './GestionCredito/gestion-credito.module';

import { AppComponent } from './app.component';
import { GestionCreditoMainComponent } from './GestionCredito/pages/gestion-credito-main/gestion-credito-main.component';
import { BankInterestRatesComponent } from './info-tasas/pages/bank-interest-rates/bank-interest-rates.component';
import { SubscribeNotificationsComponent } from './info-tasas/subscribe-notifications/subscribe-notifications.component';
import { UnsubscribeNotificationsComponent } from './info-tasas/unsubscribe-notifications/unsubscribe-notifications.component';
import { EconomicAnalysisModule } from './economic-analysis/economic-analysis.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "right",
  allowNegative: false,
  decimal: ",",
  precision: 0,
  prefix: "$ ",
  suffix: "",
  thousands: "."
};

registerLocaleData(localeEsCO);

@NgModule({
  declarations: [
    AppComponent,
    GestionCreditoMainComponent,
    BankInterestRatesComponent,
    SubscribeNotificationsComponent,
    UnsubscribeNotificationsComponent,
    SidebarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GestionCreditoModule,
    EconomicAnalysisModule
  ],
  providers: [
    provideHttpClient(),
    { provide: LOCALE_ID, useValue: 'es-CO' },
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
