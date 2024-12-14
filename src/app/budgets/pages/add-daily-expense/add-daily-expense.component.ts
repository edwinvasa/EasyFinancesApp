import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as bootstrap from 'bootstrap';
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
    expenseTypeId: null as number | null,
    amount: 0,
    paymentMethodId: 0,
    detail: ''
  };
  paymentMethods: PaymentMethod[] = [];
  expenseDetails: any[] = []; // Lista de detalles de presupuesto
  expenseTypes: ExpenseType[] = [];

  // Propiedades para filtrar y organizar los gastos relacionados
  groupedExpenseDetails: { [category: string]: any[] } = {};
  filteredExpenseDetails: { [category: string]: any[] } = {};
  searchTermExpenseDetail: string = '';

  // Propiedades para filtrar y organizar los gastos relacionados
  groupedExpenseTypes: { [category: string]: ExpenseType[] } = {};
  filteredExpenseTypes: { [category: string]: ExpenseType[] } = {};
  searchTerm: string = '';

  selectedExpenseDetail: any | null = null;
  selectedExpenseType: ExpenseType | null = null;

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
      next: (details) => {
        this.expenseDetails = details;
        this.groupExpenseDetails();
        this.filterExpenseDetails();
      },
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
      next: (types) => {
        this.expenseTypes = types;
        this.groupExpenseTypes();
        this.filterExpenseTypes();
      },
      error: (err) => console.error('Error al obtener tipos de gastos', err)
    });
  }

  // Agrupar gastos relacionados por categoría
  groupExpenseDetails(): void {
    this.groupedExpenseDetails = this.expenseDetails.reduce((acc: { [category: string]: any[] }, detail: any) => {
      const category = detail.expenseTypeCategory || 'Sin Categoría';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(detail);
      return acc;
    }, {});
  }

  // Filtrar gastos relacionados basados en el término de búsqueda
  filterExpenseDetails(): void {
    const lowerCaseSearchTerm = this.searchTermExpenseDetail.toLowerCase();
    this.filteredExpenseDetails = Object.keys(this.groupedExpenseDetails).reduce(
      (acc: { [category: string]: any[] }, category: string) => {
        const filtered = this.groupedExpenseDetails[category].filter(
          (detail) =>
            detail.customName.toLowerCase().includes(lowerCaseSearchTerm) ||
            detail.expenseTypeName.toLowerCase().includes(lowerCaseSearchTerm) ||
            detail.expenseTypeCategory.toLowerCase().includes(lowerCaseSearchTerm)
        );
        if (filtered.length > 0) {
          acc[category] = filtered;
        }
        return acc;
      },
      {}
    );
  }

  // Agrupar tipos de gastos por categoría
  groupExpenseTypes(): void {
    this.groupedExpenseTypes = this.expenseTypes.reduce((acc: { [category: string]: ExpenseType[] }, type: ExpenseType) => {
      if (!acc[type.category]) {
        acc[type.category] = [];
      }
      acc[type.category].push(type);
      return acc;
    }, {});
  }

  // Filtrar tipos de gastos según el término de búsqueda
  filterExpenseTypes(): void {
    const lowerCaseSearchTerm = this.searchTerm.toLowerCase();
    const filteredGroups: { [category: string]: ExpenseType[] } = {};

    Object.keys(this.groupedExpenseTypes).forEach((category) => {
      const filtered = this.groupedExpenseTypes[category].filter((type) =>
        type.name.toLowerCase().includes(lowerCaseSearchTerm) || type.category.toLowerCase().includes(lowerCaseSearchTerm)
      );
      if (filtered.length > 0) {
        filteredGroups[category] = filtered;
      }
    });

    this.filteredExpenseTypes = filteredGroups;
  }

  // Abrir el modal de selección de tipos de gastos
  openExpenseTypeModal(): void {
    const modalElement = document.getElementById('expenseTypeModal');
    if (modalElement) {
      const modalInstance = new bootstrap.Modal(modalElement, { backdrop: false });
      modalInstance.show();
    }
  }

  // Abrir el modal de gastos relacionados
  openExpenseDetailModal(): void {
    const modalElement = document.getElementById('expenseDetailModal');
    if (modalElement) {
      const modalInstance = new bootstrap.Modal(modalElement, { backdrop: false });
      modalInstance.show();
    }
  }

  // Seleccionar un gasto relacionado
  selectExpenseDetail(detail: any): void {
    this.selectedExpenseDetail = detail;
    this.dailyExpenseData.expenseBudgetDetailId = detail.expenseBudgetDetailId;
    this.closeModalById('expenseDetailModal');
  }

  // Seleccionar un tipo de gasto
  selectExpenseType(type: ExpenseType): void {
    this.selectedExpenseType = type;
    this.dailyExpenseData.expenseTypeId = type.id;
    this.closeModalById('expenseTypeModal');
  }

  // Cerrar modal genérico
  closeModalById(modalId: string): void {
    const modalElement = document.getElementById(modalId);
    if (modalElement) {
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      modalInstance?.hide();
    }
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
