import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BudgetsService } from '../../services/budgets.service';
import { DailyExpense } from '../../interfaces/daily-expense.interface';
import { DailyExpenseStateService } from '../../services/daily-expense-state.service';

@Component({
  selector: 'app-daily-expenses-list',
  templateUrl: './daily-expenses-list.component.html',
  styleUrls: ['./daily-expenses-list.component.css']
})
export class DailyExpensesListComponent implements OnInit {
  dailyExpenses: DailyExpense[] = [];
  budgetId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private budgetsService: BudgetsService,
    private dailyExpenseStateService: DailyExpenseStateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.budgetId = this.route.snapshot.paramMap.get('budgetId');
    if (this.budgetId) {
      this.fetchDailyExpenses(this.budgetId);
    }
  }

  fetchDailyExpenses(budgetId: string): void {
    this.budgetsService.getDailyExpensesByBudget(budgetId).subscribe({
      next: (data) => {
        console.log('Gastos diarios obtenidos:', data);
        this.dailyExpenses = data;
      },
      error: (err) => console.error('Error al obtener gastos diarios', err)
    });
  }

  editExpense(expense: any): void {
    this.dailyExpenseStateService.setExpenseData(expense);
    this.router.navigate([
      '/budgets/daily-expenses/update',
      expense.budgetId,
      expense.expenseBudgetDetailId,
      expense.dailyExpenseRecordId
    ]);
  }

  deleteExpense(expense: any): void {
    if (confirm(`¿Estás seguro de que deseas eliminar este gasto diario?`)) {
      this.budgetsService.deleteDailyExpense(
        expense.budgetId,
        expense.expenseBudgetDetailId,
        expense.dailyExpenseRecordId
      ).subscribe({
        next: () => {
          alert('Gasto diario eliminado con éxito.');
          this.fetchDailyExpenses(expense.budgetId);
        },
        error: (err) => {
          console.error('Error al eliminar el gasto diario', err);
          alert('Ocurrió un error al eliminar el gasto diario.');
        }
      });
    }
  }

}
