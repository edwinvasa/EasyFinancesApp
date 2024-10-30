import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedExpenseService {
  private readonly expensesSubject = new BehaviorSubject<{ expenseTypeId: number, expenseTypeNameAndCategory: string, amount: number }[]>([]);
  expenses$ = this.expensesSubject.asObservable();

  // Obtener la lista actual de gastos
  getExpenses() {
    return this.expensesSubject.getValue();
  }

  // Agregar gasto
  addExpense(expense: { expenseTypeId: number, expenseTypeNameAndCategory: string, amount: number }) {
    const updatedExpenses = [...this.getExpenses(), expense];
    this.expensesSubject.next(updatedExpenses);
  }

  // Editar gasto
  editExpense(updatedExpense: { expenseTypeId: number, expenseTypeNameAndCategory: string, amount: number }) {
    const updatedExpenses = this.getExpenses().map(expense =>
      expense.expenseTypeId === updatedExpense.expenseTypeId ? updatedExpense : expense
    );
    this.expensesSubject.next(updatedExpenses);
  }

  // Eliminar gasto
  removeExpense(expenseId: number) {
    const updatedExpenses = this.getExpenses().filter(expense => expense.expenseTypeId !== expenseId);
    this.expensesSubject.next(updatedExpenses);
  }
}
