import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BudgetsService } from '../../services/budgets.service';
import { PaymentMethodService, PaymentMethod } from '../../services/payment-method.service';
import { ExpenseTypeService } from '../../../economic-analysis/services/expense-type.service';
import { ExpenseType } from '../../../economic-analysis/interfaces/expense-type.interface';

@Component({
  selector: 'app-add-daily-expense',
  templateUrl: './add-daily-expense.component.html',
  styleUrls: ['./add-daily-expense.component.css']
})
export class AddDailyExpenseComponent implements OnInit {
  @Input() budgetId: string | null = null;
  @Output() closeModal = new EventEmitter<void>();

  dailyExpenseData = {
    expenseBudgetDetailId: 0,
    paymentDate: '',
    expenseTypeId: null,
    amount: 0,
    paymentMethodId: 0,
    detail: ''
  };
  paymentMethods: PaymentMethod[] = [];
  expenseDetails: any[] = []; // Lista de detalles de presupuesto
  expenseTypes: ExpenseType[] = [];

  constructor(
    private budgetsService: BudgetsService,
    private paymentMethodService: PaymentMethodService,
    private expenseTypeService: ExpenseTypeService
  ) {}

  ngOnInit(): void {
    if (this.budgetId) {
      this.fetchExpenseDetails(this.budgetId);
      this.fetchPaymentMethods();
      this.fetchExpenseTypes();
    }
  }

  fetchExpenseDetails(budgetId: string): void {
    this.budgetsService.getExpensesByBudget(budgetId).subscribe({
      next: (details) => (this.expenseDetails = details),
      error: (err) => console.error('Error al obtener detalles del presupuesto', err)
    });
  }

  fetchPaymentMethods(): void {
    this.paymentMethodService.getPaymentMethods().subscribe({
      next: (methods) => (this.paymentMethods = methods),
      error: (err) => console.error('Error al obtener métodos de pago', err)
    });
  }

  fetchExpenseTypes(): void {
    this.expenseTypeService.getExpenseTypes().subscribe({
      next: (types) => (this.expenseTypes = types),
      error: (err) => console.error('Error al obtener tipos de gastos', err)
    });
  }

  addDailyExpense(): void {
    if (!this.budgetId) return;

    const dailyExpenseRequest = {
      ...this.dailyExpenseData,
      budgetId: this.budgetId
    };

    this.budgetsService.addDailyExpense(dailyExpenseRequest).subscribe({
      next: () => {
        alert('Gasto diario agregado con éxito');
        this.closeModal.emit();
      },
      error: (err) => {
        console.error('Error al agregar el gasto diario', err);
        alert('Ocurrió un error al agregar el gasto diario');
      }
    });
  }

  cancel(): void {
    this.closeModal.emit();
  }
}
