import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BudgetsService } from '../../services/budgets.service';
import { ExpenseTypeService } from '../../../economic-analysis/services/expense-type.service';
import { ExpenseType } from '../../../economic-analysis/interfaces/expense-type.interface';
import { Expense } from '../../interfaces/expense.interface';

@Component({
  selector: 'app-update-expense',
  templateUrl: './update-expense.component.html',
  styleUrls: ['./update-expense.component.css']
})
export class UpdateExpenseComponent implements OnInit {
  budgetId: string | null = null;
  expenseId: number | null = null;
  expenseData: Partial<Expense> = {
    customName: '',
    expenseTypeId: 0,
    budgetedAmount: 0
  };
  expenseTypes: ExpenseType[] = []; // Lista de tipos de gastos

  constructor(
    private route: ActivatedRoute,
    private budgetsService: BudgetsService,
    private expenseTypeService: ExpenseTypeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.budgetId = this.route.snapshot.paramMap.get('budgetId');
    this.expenseId = Number(this.route.snapshot.paramMap.get('expenseId'));
    if (this.budgetId && this.expenseId) {
      this.fetchExpenseData(this.budgetId, this.expenseId);
    }
    this.fetchExpenseTypes();
  }

  fetchExpenseData(budgetId: string, expenseId: number): void {
    this.budgetsService.getExpensesByBudget(budgetId).subscribe({
      next: (expenses) => {
        const expense = expenses.find((e) => e.expenseBudgetDetailId === expenseId);
        if (expense) {
          this.expenseData = {
            customName: expense.customName,
            expenseTypeId: expense.expenseTypeId,
            budgetedAmount: expense.budgetedAmount
          };
        }
      },
      error: (err) => console.error('Error al obtener gasto', err)
    });
  }

  fetchExpenseTypes(): void {
    this.expenseTypeService.getExpenseTypes().subscribe({
      next: (types) => (this.expenseTypes = types),
      error: (err) => console.error('Error al obtener tipos de gastos', err)
    });
  }

  updateExpense(): void {
    if (!this.budgetId || !this.expenseId) return;

    const updateRequest = {
      budgetId: this.budgetId,
      expenseBudgetDetailId: this.expenseId,
      budgetedAmount: this.expenseData.budgetedAmount,
      customName: this.expenseData.customName,
      expenseTypeId: this.expenseData.expenseTypeId
    };

    this.budgetsService.updateExpense(updateRequest).subscribe({
      next: () => {
        alert('Gasto actualizado con éxito');
        this.router.navigate([`/budgets/expenses/${this.budgetId}`]);
      },
      error: (err) => {
        console.error('Error al actualizar el gasto', err);
        alert('Ocurrió un error al actualizar el gasto');
      }
    });
  }
}
