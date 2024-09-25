import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { EconomicAnalysisService } from '../../services/economic-analysis.service';
import { EconomicAnalysisRequest, EconomicAnalysisResponse, Expense } from '../../interfaces/economic-analysis.interface';

@Component({
  selector: 'app-economic-analysis-form',
  templateUrl: './economic-analysis-form.component.html',
})
export class EconomicAnalysisFormComponent {
  monthlyIncome: number = 0;
  additionalIncome: number = 0;
  receivesChristmasBonus: boolean = false;
  receivesMidYearBonus: boolean = false;
  christmasBonusAmount: number = 0;
  midYearBonusAmount: number = 0;

  expenses: { expenseTypeId: number, expenseTypeNameAndCategory: string, amount: number }[] = [];
  analysisResult?: EconomicAnalysisResponse;

  constructor(private economicAnalysisService: EconomicAnalysisService) {}

  addExpense(expense: { expenseTypeId: number, expenseTypeNameAndCategory: string, amount: number }) {
    this.expenses.push(expense);
  }

  removeExpense(index: number) {
    this.expenses.splice(index, 1);
  }

  analyzeEconomicCapacity() {
    if (this.expenses.length === 0) return;
    const formattedExpenses: Expense[] = this.expenses.map(e => ({
      expenseTypeId: e.expenseTypeId,
      amount: e.amount
    }));

    const analysisRequest: EconomicAnalysisRequest = {
      userId: uuidv4(),
      monthlyIncome: this.monthlyIncome,
      additionalIncome: this.additionalIncome,
      expenses: formattedExpenses,
      receivesChristmasBonus: this.receivesChristmasBonus,
      receivesMidYearBonus: this.receivesMidYearBonus,
      christmasBonusAmount: this.receivesChristmasBonus ? this.christmasBonusAmount : 0,
      midYearBonusAmount: this.receivesMidYearBonus ? this.midYearBonusAmount : 0
    };

    this.economicAnalysisService.analyzeEconomicCapacity(analysisRequest).subscribe({
      next: (response) => {
        this.analysisResult = response;
      },
      error: (err) => {
        console.error('Error al analizar la capacidad económica:', err);
      }
    });
  }
}
