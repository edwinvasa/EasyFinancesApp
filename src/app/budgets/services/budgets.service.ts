import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Budget } from '../interfaces/budget.interface';
import { Expense } from '../interfaces/expense.interface';
import { Income } from '../interfaces/income.interface';
import { DailyExpense } from '../interfaces/daily-expense.interface';

@Injectable({
  providedIn: 'root'
})
export class BudgetsService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getBudgetsByUser(userId: string): Observable<Budget[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic YWRtaW46cGFzc3dvcmQ='
    });

    return this.http.get<Budget[]>(`${this.apiUrl}/queries/budgets/user/${userId}`, { headers });
  }

  createBudget(budget: Partial<Budget>): Observable<Budget> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic YWRtaW46cGFzc3dvcmQ='
    });

    return this.http.post<Budget>(`${this.apiUrl}/commands/budgets`, budget, { headers });
  }

  getBudgetById(userId: string, budgetId: string): Observable<Budget> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic YWRtaW46cGFzc3dvcmQ='
    });

    return this.http.get<Budget>(`${this.apiUrl}/queries/budgets/user/${userId}/${budgetId}`, { headers });
  }

  cloneBudget(cloneRequest: any): Observable<Budget> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic YWRtaW46cGFzc3dvcmQ='
    });

    return this.http.post<Budget>(`${this.apiUrl}/commands/budgets/clone`, cloneRequest, { headers });
  }

  updateBudget(userId: string, budgetId: string, updateRequest: any): Observable<Budget> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic YWRtaW46cGFzc3dvcmQ='
    });

    return this.http.put<Budget>(`${this.apiUrl}/commands/budgets/${userId}/${budgetId}`, updateRequest, { headers });
  }

  deleteBudget(userId: string, budgetId: string): Observable<void> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic YWRtaW46cGFzc3dvcmQ='
    });

    return this.http.delete<void>(`${this.apiUrl}/commands/budgets/${userId}/${budgetId}`, { headers });
  }

  getExpensesByBudget(budgetId: string): Observable<Expense[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic YWRtaW46cGFzc3dvcmQ='
    });

    return this.http.get<Expense[]>(`${this.apiUrl}/queries/budget-details/expense/${budgetId}`, { headers });
  }

  addExpense(expenseRequest: { budgetId: string; customName: string; budgetedAmount: number; expenseTypeId: number }): Observable<void> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic YWRtaW46cGFzc3dvcmQ='
    });

    return this.http.post<void>(`${this.apiUrl}/commands/budget-details/expense`, expenseRequest, { headers });
  }

  updateExpense(updateRequest: any): Observable<Expense> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic YWRtaW46cGFzc3dvcmQ='
    });

    return this.http.put<Expense>(`${this.apiUrl}/commands/budget-details/expense`, updateRequest, { headers });
  }

  deleteExpense(budgetId: string, expenseId: number): Observable<void> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic YWRtaW46cGFzc3dvcmQ='
    });

    return this.http.delete<void>(`${this.apiUrl}/commands/budget-details/expense/${budgetId}/${expenseId}`, { headers });
  }

  getIncomesByBudget(budgetId: string): Observable<Income[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic YWRtaW46cGFzc3dvcmQ='
    });

    return this.http.get<Income[]>(`${this.apiUrl}/queries/budget-details/income/${budgetId}`, { headers });
  }

  addIncome(incomeRequest: { budgetId: string; name: string; amount: number }): Observable<void> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic YWRtaW46cGFzc3dvcmQ='
    });

    return this.http.post<void>(`${this.apiUrl}/commands/budget-details/income`, incomeRequest, { headers });
  }

  updateIncome(budgetId: string, incomeId: number, updateRequest: any): Observable<Income> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic YWRtaW46cGFzc3dvcmQ='
    });

    return this.http.put<Income>(`${this.apiUrl}/commands/budget-details/income/${budgetId}/${incomeId}`, updateRequest, { headers });
  }

  deleteIncome(budgetId: string, incomeId: number): Observable<void> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic YWRtaW46cGFzc3dvcmQ='
    });

    return this.http.delete<void>(`${this.apiUrl}/commands/budget-details/income/${budgetId}/${incomeId}`, { headers });
  }

  getDailyExpensesByBudget(budgetId: string): Observable<DailyExpense[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic YWRtaW46cGFzc3dvcmQ='
    });

    return this.http.get<DailyExpense[]>(`${this.apiUrl}/queries/daily-expense-records/by-budget/${budgetId}`, { headers });
  }

  addDailyExpense(dailyExpenseRequest: {
    budgetId: string;
    expenseBudgetDetailId: number;
    paymentDate: string;
    amount: number;
    paymentMethodId: number;
    detail: string;
    expenseTypeId?: number | null;
  }): Observable<void> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic YWRtaW46cGFzc3dvcmQ='
    });

    return this.http.post<void>(`${this.apiUrl}/commands/daily-expense-records`, dailyExpenseRequest, { headers });
  }

  updateDailyExpense(
    budgetId: string,
    expenseDetailId: number,
    recordId: number,
    updateRequest: any
  ): Observable<void> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic YWRtaW46cGFzc3dvcmQ='
    });

    return this.http.put<void>(
      `${this.apiUrl}/commands/daily-expense-records/${budgetId}/${expenseDetailId}/${recordId}`,
      updateRequest,
      { headers }
    );
  }

  deleteDailyExpense(
    budgetId: string,
    expenseBudgetDetailId: number,
    dailyExpenseRecordId: number
  ): Observable<void> {
    const url = `${this.apiUrl}/commands/daily-expense-records/${budgetId}/${expenseBudgetDetailId}/${dailyExpenseRecordId}`;
    return this.http.delete<void>(url, {
      headers: { Authorization: 'Basic YWRtaW46cGFzc3dvcmQ=' }
    });
  }

}
