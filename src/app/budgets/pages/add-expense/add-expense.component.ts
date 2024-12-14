import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as bootstrap from 'bootstrap';
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
    expenseTypeId: null as number | null,
    budgetedAmount: 0
  };

  expenseTypes: ExpenseType[] = []; // Lista de tipos de gastos
  groupedExpenseTypes: { [category: string]: ExpenseType[] } = {}; // Agrupados por categoría
  filteredExpenseTypes: { [category: string]: ExpenseType[] } = {}; // Filtrados
  searchTerm: string = ''; // Término de búsqueda

  selectedExpenseType: ExpenseType | null = null; // Tipo de gasto seleccionado

  constructor(
    private budgetsService: BudgetsService,
    private expenseTypeService: ExpenseTypeService,
  ) {}

  ngOnInit(): void {
    this.fetchExpenseTypes();
  }

  fetchExpenseTypes(): void {
    this.expenseTypeService.getExpenseTypes().subscribe({
      next: (types) => {
        this.expenseTypes = types;
        this.groupExpenseTypes();
        this.filterExpenseTypes();
      },
      error: (err) => console.error('Error al obtener tipos de gastos', err),
    });
  }

  // Agrupar tipos de gasto por categoría
  groupExpenseTypes(): void {
    this.groupedExpenseTypes = this.expenseTypes.reduce((acc: { [category: string]: ExpenseType[] }, type: ExpenseType) => {
      if (!acc[type.category]) {
        acc[type.category] = [];
      }
      acc[type.category].push(type);
      return acc;
    }, {});
  }

  // Filtrar tipos de gasto por término de búsqueda
  filterExpenseTypes(): void {
    const lowerCaseSearchTerm = this.searchTerm.toLowerCase();
    const filteredGroups: { [category: string]: ExpenseType[] } = {};

    Object.keys(this.groupedExpenseTypes).forEach(category => {
      const filtered = this.groupedExpenseTypes[category].filter(type =>
        type.name.toLowerCase().includes(lowerCaseSearchTerm) || type.category.toLowerCase().includes(lowerCaseSearchTerm)
      );

      if (filtered.length > 0) {
        filteredGroups[category] = filtered;
      }
    });

    this.filteredExpenseTypes = filteredGroups;
  }

  // Abrir el modal de selección de tipo de gasto
  openExpenseTypeModal(): void {
    const modalElement = document.getElementById('expenseTypeModal');
    if (modalElement) {
      const modalInstance = new bootstrap.Modal(modalElement, { backdrop: false });
      modalInstance.show();
    }
  }

  // Seleccionar un tipo de gasto
  selectExpenseType(type: ExpenseType): void {
    this.selectedExpenseType = type;
    this.expenseData.expenseTypeId = type.id; // Asignar el ID del tipo de gasto seleccionado
    this.closeModalById('expenseTypeModal');
  }

  // Cerrar modal por ID
  closeModalById(modalId: string): void {
    const modalElement = document.getElementById(modalId);
    if (modalElement) {
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      modalInstance?.hide();
    }
  }

  addExpense(): void {
    if (!this.budgetId) return;

    if (!this.expenseData.expenseTypeId) {
      alert('Por favor, seleccione un tipo de gasto.');
      return;
    }

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
