import { Component, Input } from '@angular/core';
import { LoanAnalysisResponse } from '../../interfaces/loan-analysis.interface';

@Component({
  selector: 'app-tabla-amortizacion',
  templateUrl: './tabla-amortizacion.component.html',
  styleUrl: './tabla-amortizacion.component.css'
})
export class TablaAmortizacionComponent {
  @Input()
  loanAnalysisResponse!: LoanAnalysisResponse;

  constructor() {}
}
