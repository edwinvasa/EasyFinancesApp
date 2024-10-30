import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { EconomicAnalysisService } from '../../services/economic-analysis.service';
import { EconomicAnalysisRequest, EconomicAnalysisResponse, Expense } from '../../interfaces/economic-analysis.interface';
import { ExpenseTypeService } from '../../services/expense-type.service';
import { ExpenseType } from '../../interfaces/expense-type.interface';
import { SharedExpenseService } from '../../services/shared-expense.service';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-economic-analysis-form',
  templateUrl: './economic-analysis-form.component.html',
  styleUrls: ['./economic-analysis-form.component.css']
})
export class EconomicAnalysisFormComponent implements OnInit {
  monthlyIncome: number = 0;
  additionalIncome: number = 0;
  receivesChristmasBonus: boolean = false;
  receivesMidYearBonus: boolean = false;
  christmasBonusAmount: number = 0;
  midYearBonusAmount: number = 0;

  expenses: { expenseTypeId: number, expenseTypeNameAndCategory: string, amount: number }[] = [];
  analysisResult?: EconomicAnalysisResponse;

  expenseTypes: ExpenseType[] = [];
  groupedExpenseTypes: { [category: string]: ExpenseType[] } = {};
  filteredExpenseTypes: { [category: string]: ExpenseType[] } = {};
  searchTerm: string = '';

  selectedExpense?: ExpenseType;
  amountInput: number = 0;
  showAmountInput: boolean = false;
  errorMessage: string = '';

  constructor(
    private readonly economicAnalysisService: EconomicAnalysisService,
    private readonly expenseTypeService: ExpenseTypeService,
    private readonly sharedExpenseService: SharedExpenseService
  ) {}

  ngOnInit() {
    this.loadExpenseTypes();
    this.expenses = this.sharedExpenseService.getExpenses();
  }

  // Método para cargar los tipos de gastos
  loadExpenseTypes() {
    this.expenseTypeService.getExpenseTypes().subscribe({
      next: (types) => {
        this.expenseTypes = types;
        this.groupExpenseTypes();
        this.filterExpenses();
      }
    });
  }

  // Agrupar los tipos de gastos por categoría
  groupExpenseTypes() {
    this.groupedExpenseTypes = this.expenseTypes.reduce((acc: { [category: string]: ExpenseType[] }, type: ExpenseType) => {
      if (!acc[type.category]) {
        acc[type.category] = [];
      }
      acc[type.category].push(type);
      return acc;
    }, {});
  }

  // Filtrar tipos de gastos basados en el término de búsqueda
  filterExpenses() {
    const lowerCaseSearchTerm = this.searchTerm.toLowerCase();
    const filteredGroups: { [category: string]: ExpenseType[] } = {};

    Object.keys(this.groupedExpenseTypes).forEach(category => {
      const filtered = this.groupedExpenseTypes[category].filter(type => {
        const isSelected = this.expenses.some(expense => expense.expenseTypeId === type.id);
        return !isSelected && (type.name.toLowerCase().includes(lowerCaseSearchTerm) || type.category.toLowerCase().includes(lowerCaseSearchTerm));
      });

      if (filtered.length > 0) {
        filteredGroups[category] = filtered;
      }
    });

    this.filteredExpenseTypes = filteredGroups;
  }

  // Abrir el modal de selección de tipos de gastos
  openExpenseModal() {
    const modalElement = document.getElementById('expenseModal');
    if (modalElement) {
      const modalInstance = new bootstrap.Modal(modalElement);
      modalInstance.show();
    }
  }

  // Cerrar el modal
  closeModal() {
    const modalElement = document.getElementById('expenseModal');
    if (modalElement) {
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      modalInstance?.hide();
    }
    this.resetSelection();
  }

  // Seleccionar un tipo de gasto para ingresar el monto
  selectExpense(expenseType: ExpenseType) {
    this.selectedExpense = expenseType;
    this.amountInput = 0;
    this.showAmountInput = true;
    this.errorMessage = '';
  }

  // Confirmar el monto ingresado para un tipo de gasto
  confirmAmount() {
    if (this.amountInput > 0) {
      const newExpense = {
        expenseTypeId: this.selectedExpense!.id,
        expenseTypeNameAndCategory: `${this.selectedExpense!.name} - ${this.selectedExpense!.category}`,
        amount: this.amountInput
      };
      this.addExpense(newExpense);
      this.showAmountInput = false;
      this.amountInput = 0;
      this.filterExpenses();
      this.closeModal();
    } else {
      this.errorMessage = 'Por favor, ingrese un monto válido.';
    }
  }

  // Restablecer la selección de tipo de gasto
  resetSelection() {
    this.selectedExpense = undefined;
    this.amountInput = 0;
    this.showAmountInput = false;
    this.errorMessage = '';
  }

  // Cancelar la entrada de monto
  cancelAmountInput() {
    this.resetSelection();
  }

  // Añadir un gasto a la lista
  addExpense(expense: { expenseTypeId: number, expenseTypeNameAndCategory: string, amount: number }) {
    this.sharedExpenseService.addExpense(expense);
    this.expenses = this.sharedExpenseService.getExpenses();
    this.filterExpenses();
  }

  editExpense(expense: { expenseTypeId: number, expenseTypeNameAndCategory: string, amount: number }) {
    // Asigna el gasto seleccionado y su monto al nuevo modal de edición
    this.selectedExpense = this.expenseTypes.find(type => type.id === expense.expenseTypeId);
    this.amountInput = expense.amount;
    this.errorMessage = '';
  
    // Abrir el modal de edición
    const editModalElement = document.getElementById('editExpenseModal');
    if (editModalElement) {
      const modalInstance = new bootstrap.Modal(editModalElement);
      modalInstance.show();
    }
  }  

  confirmEditAmount() {
    if (this.amountInput > 0) {
      // Actualiza el monto del gasto seleccionado
      const expenseToUpdate = this.expenses.find(exp => exp.expenseTypeId === this.selectedExpense!.id);
      if (expenseToUpdate) {
        expenseToUpdate.amount = this.amountInput;
        this.sharedExpenseService.editExpense(expenseToUpdate);
        this.filterExpenses();
        this.closeEditModal(); // Cierra el modal después de confirmar la edición
      }
    } else {
      this.errorMessage = 'Por favor, ingrese un monto válido.';
    }
  }
  
  // Cerrar el nuevo modal de edición
  closeEditModal() {
    const editModalElement = document.getElementById('editExpenseModal');
    if (editModalElement) {
      const modalInstance = bootstrap.Modal.getInstance(editModalElement);
      modalInstance?.hide();
    }
    this.resetSelection();
  }
  
  // Cancelar la edición y cerrar el modal
  cancelEdit() {
    this.closeEditModal();
  }  

  // Eliminar un gasto de la lista
  removeExpense(expenseId: number) {
    this.sharedExpenseService.removeExpense(expenseId);
    this.expenses = this.sharedExpenseService.getExpenses();
    this.filterExpenses();
  }

  // Analizar la capacidad económica del usuario
  analyzeEconomicCapacity() {
    if (this.expenses.length === 0) return;

    const formattedExpenses: Expense[] = this.expenses.map(e => ({
      expenseTypeId: e.expenseTypeId,
      amount: e.amount
    }));

    const analysisRequest: EconomicAnalysisRequest = {
      userId: uuidv4(),
      monthlyIncome: this.monthlyIncome,
      additionalIncome: this.additionalIncome,
      expenses: formattedExpenses,
      receivesChristmasBonus: this.receivesChristmasBonus,
      receivesMidYearBonus: this.receivesMidYearBonus,
      christmasBonusAmount: this.receivesChristmasBonus ? this.christmasBonusAmount : 0,
      midYearBonusAmount: this.receivesMidYearBonus ? this.midYearBonusAmount : 0
    };

    this.economicAnalysisService.analyzeEconomicCapacity(analysisRequest).subscribe({
      next: (response) => {
        this.analysisResult = response;
      }
    });
  }
}
