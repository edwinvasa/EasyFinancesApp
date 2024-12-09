import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DailyExpenseStateService {
  private expenseData: any;

  setExpenseData(data: any): void {
    this.expenseData = data;
  }

  getExpenseData(): any {
    return this.expenseData;
  }

  clearExpenseData(): void {
    this.expenseData = null;
  }
}
