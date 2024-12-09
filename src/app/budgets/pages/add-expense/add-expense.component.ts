import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BudgetsService } from '../../services/budgets.service';
import { ExpenseTypeService } from '../../../economic-analysis/services/expense-type.service';
import { ExpenseType } from '../../../economic-analysis/interfaces/expense-type.interface';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {
  budgetId: string | null = null;
  expenseData = {
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
    this.fetchExpenseTypes();
  }

  fetchExpenseTypes(): void {
    this.expenseTypeService.getExpenseTypes().subscribe({
      next: (types) => (this.expenseTypes = types),
      error: (err) => console.error('Error al obtener tipos de gastos', err)
    });
  }

  addExpense(): void {
    if (!this.budgetId) return;

    const expenseRequest = {
      ...this.expenseData,
      budgetId: this.budgetId
    };

    this.budgetsService.addExpense(expenseRequest).subscribe({
      next: () => {
        alert('Gasto agregado con éxito');
        this.router.navigate([`/budgets/expenses/${this.budgetId}`]);
      },
      error: (err) => {
        console.error('Error al agregar el gasto', err);
        alert('Ocurrió un error al agregar el gasto');
      }
    });
  }
}
