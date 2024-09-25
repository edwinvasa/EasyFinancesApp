import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCurrencyPipe } from '../utils/pipes/custom-currency.pipe';

@NgModule({
  declarations: [
    CustomCurrencyPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomCurrencyPipe
  ]
})
export class SharedModule { }
