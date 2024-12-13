import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetsService } from '../../services/budgets.service';
import { ExpenseTypeService } from '../../../economic-analysis/services/expense-type.service';
import { ExpenseType } from '../../../economic-analysis/interfaces/expense-type.interface';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {
  @Input() budgetId: string | null = null;
  @Output() closeModal = new EventEmitter<void>();

  expenseData = {
    customName: '',
    expenseTypeId: 0,
    budgetedAmount: 0
  };
  expenseTypes: ExpenseType[] = []; // Lista de tipos de gastos

  constructor(
    private budgetsService: BudgetsService,
    private expenseTypeService: ExpenseTypeService,
  ) {}

  ngOnInit(): void {
    this.fetchExpenseTypes();
  }

  fetchExpenseTypes(): void {
    this.expenseTypeService.getExpenseTypes().subscribe({
      next: (types) => (this.expenseTypes = types),
      error: (err) => console.error('Error al obtener tipos de gastos', err),
    });
  }

  addExpense(): void {
    if (!this.budgetId) return;

    const expenseRequest = {
      ...this.expenseData,
      budgetId: this.budgetId,
    };

    this.budgetsService.addExpense(expenseRequest).subscribe({
      next: () => {
        alert('Gasto agregado con éxito');
        this.closeModal.emit();
      },
      error: (err) => {
        console.error('Error al agregar el gasto', err);
        alert('Ocurrió un error al agregar el gasto');
      },
    });
  }

  cancel(): void {
    this.closeModal.emit();
  }
}
