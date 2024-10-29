import { Component, Input } from '@angular/core';
import { LoanAnalysis, LoanAnalysisResponse, Suggestion } from '../../interfaces/loan-analysis.interface';

@Component({
  selector: 'app-analisis-credito',
  templateUrl: './analisis-credito.component.html',
  styleUrl: './analisis-credito.component.css'
})
export class AnalisisCreditoComponent {
  @Input()
  loanAnalysisResponse?: LoanAnalysisResponse;

  @Input()
  analysis?: LoanAnalysis;

  @Input()
  suggestion: Suggestion | null = null;

  showAmortizationTables: boolean = false;

  constructor() { }

  toggleAmortizationTables() {
    this.showAmortizationTables = !this.showAmortizationTables;
  }
}
