import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BudgetsService } from '../../services/budgets.service';
import { Expense } from '../../interfaces/expense.interface';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit {
  expenses: Expense[] = [];
  budgetId: string | null = null;

  constructor(private route: ActivatedRoute, private budgetsService: BudgetsService) {}

  ngOnInit(): void {
    this.budgetId = this.route.snapshot.paramMap.get('budgetId');
    if (this.budgetId) {
      this.fetchExpenses(this.budgetId);
    }
  }

  fetchExpenses(budgetId: string): void {
    this.budgetsService.getExpensesByBudget(budgetId).subscribe({
      next: (data) => (this.expenses = data),
      error: (err) => console.error('Error al obtener gastos', err)
    });
  }

  confirmDelete(expenseId: number): void {
    const confirmation = confirm('¿Estás seguro de que deseas eliminar este gasto?');
    if (confirmation && this.budgetId) {
      this.deleteExpense(this.budgetId, expenseId);
    }
  }

  deleteExpense(budgetId: string, expenseId: number): void {
    this.budgetsService.deleteExpense(budgetId, expenseId).subscribe({
      next: () => {
        alert('Gasto eliminado con éxito');
        this.fetchExpenses(budgetId); // Refrescar la lista después de la eliminación
      },
      error: (err) => {
        console.error('Error al eliminar el gasto', err);
        alert('Ocurrió un error al eliminar el gasto');
      }
    });
  }

}
