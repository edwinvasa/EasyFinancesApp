import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentMethodService, PaymentMethod } from '../../services/payment-method.service';
import { BudgetsService } from '../../services/budgets.service';
import { DailyExpenseStateService } from '../../services/daily-expense-state.service';

@Component({
  selector: 'app-update-daily-expense',
  templateUrl: './update-daily-expense.component.html',
  styleUrls: ['./update-daily-expense.component.css']
})
export class UpdateDailyExpenseComponent implements OnInit {
  budgetId: string | null = null;
  expenseBudgetDetailId: number | null = null;
  dailyExpenseRecordId: number | null = null;
  dailyExpenseData: any = {
    expenseBudgetDetailId: 0,
    paymentDate: '',
    amount: 0,
    paymentMethodId: 0,
    detail: ''
  };
  paymentMethods: PaymentMethod[] = [];
  expenseDetails: any[] = []; // Lista de detalles del presupuesto

  constructor(
    private route: ActivatedRoute,
    private paymentMethodService: PaymentMethodService,
    private budgetsService: BudgetsService,
    private dailyExpenseStateService: DailyExpenseStateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Obtener parámetros del route
    this.budgetId = this.route.snapshot.paramMap.get('budgetId');
    this.expenseBudgetDetailId = Number(this.route.snapshot.paramMap.get('expenseBudgetDetailId'));
    this.dailyExpenseRecordId = Number(this.route.snapshot.paramMap.get('dailyExpenseRecordId'));

    // Obtener los datos desde el servicio
    const expenseData = this.dailyExpenseStateService.getExpenseData();
    if (expenseData) {
      this.dailyExpenseData = { ...expenseData };
      console.log('Datos del gasto diario asignados:', this.dailyExpenseData);
    } else {
      console.error('No se recibió el estado con los datos del gasto diario.');
    }
    this.dailyExpenseStateService.clearExpenseData();

    // Cargar métodos de pago y detalles del presupuesto
    this.fetchPaymentMethods();
    if (this.budgetId) {
      this.fetchExpenseDetails(this.budgetId);
    }
  }

  fetchPaymentMethods(): void {
    this.paymentMethodService.getPaymentMethods().subscribe({
      next: (methods) => (this.paymentMethods = methods),
      error: (err) => console.error('Error al obtener métodos de pago', err)
    });
  }

  fetchExpenseDetails(budgetId: string): void {
    this.budgetsService.getExpensesByBudget(budgetId).subscribe({
      next: (details) => (this.expenseDetails = details),
      error: (err) => console.error('Error al obtener detalles del presupuesto', err)
    });
  }

  updateDailyExpense(): void {
    if (!this.budgetId || !this.expenseBudgetDetailId || !this.dailyExpenseRecordId) return;

    const updateRequest = { ...this.dailyExpenseData };

    this.budgetsService.updateDailyExpense(
      this.budgetId,
      this.expenseBudgetDetailId,
      this.dailyExpenseRecordId,
      updateRequest
    ).subscribe({
      next: () => {
        alert('Gasto diario actualizado con éxito');
        this.router.navigate([`/budgets/daily-expenses/${this.budgetId}`]);
      },
      error: (err) => {
        console.error('Error al actualizar el gasto diario', err);
        alert('Ocurrió un error al actualizar el gasto diario');
      }
    });
  }
}
