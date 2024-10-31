import { Component } from '@angular/core';
import { LoanAnalysisService } from '../../services/loan-analysis.service';
import { LoanAnalysisResponse } from '../../interfaces/loan-analysis.interface';

@Component({
  selector: 'app-gestion-credito-main',
  templateUrl: './gestion-credito-main.component.html'
})
export class GestionCreditoMainComponent {
  loanAnalysisResponse?: LoanAnalysisResponse;

  constructor(private readonly loanAnalysisService: LoanAnalysisService) {}

  handleCreditSubmission(formValues: any) {
    this.loanAnalysisService.analyzeLoan(formValues).subscribe({
      next: (response: LoanAnalysisResponse) => {
        this.loanAnalysisResponse = response;
      },
      error: (error) => console.error('Error al obtener los datos de análisis', error)
    });
  }
}
