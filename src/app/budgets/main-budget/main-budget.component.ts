import { Component, OnInit } from '@angular/core';
import { Budget } from '../interfaces/budget.interface';
import { DailyExpense } from '../interfaces/daily-expense.interface';
import { Expense } from '../interfaces/expense.interface';
import { Income } from '../interfaces/income.interface';
import { BudgetsService } from '../services/budgets.service';
import { ToastrService } from 'ngx-toastr';
import { ExpenseType } from '../../economic-analysis/interfaces/expense-type.interface';
import { PaymentMethod, PaymentMethodService } from '../services/payment-method.service';
import { ExpenseTypeService } from '../../economic-analysis/services/expense-type.service';

@Component({
  selector: 'app-main-budget',
  templateUrl: './main-budget.component.html',
  styleUrls: ['./main-budget.component.css']
})
export class MainBudgetComponent implements OnInit {
  selectedBudgetId: string | null = null;

  budgets: Budget[] = [];
  recentBudget: Budget | null = null;
  incomes: Income[] = [];
  expenses: Expense[] = [];
  dailyExpenses: DailyExpense[] = [];

  showIncomes = false;
  showExpenses = false;
  showDailyExpenses = false;
  isLoading = false;

  // Variables para gestionar ediciones
  editingIncomeId: number | null = null;
  editingExpenseId: number | null = null;
  editingDailyExpenseId: number | null = null;
  isEditingBudget: boolean = false; // Estado para controlar el modo de edición
  editableBudget: Partial<Budget> = {}; // Copia del presupuesto que se está editando


  //filtros de busqueda
  incomeSearchTerm: string = '';
  filteredIncomes: Income[] = [];

  expenseSearchTerm: string = '';
  filteredExpenses: Expense[] = [];

  dailyExpenseSearchTerm: string = '';
  filteredDailyExpenses: DailyExpense[] = [];

  // Propiedades para manejar el estado de "agregar"
  isAddingIncome = false;
  newIncome: Partial<Income> = {};

  isAddingExpense = false;
  newExpense: Partial<Expense> = {};

  isAddingDailyExpense = false;
  newDailyExpense: Partial<DailyExpense> = {};

  expenseTypes: ExpenseType[] = [];
  paymentMethods: PaymentMethod[] = [];
  expenseDetails: any[] = [];

  //graficas
  expandedPanels: Set<string> = new Set();
  userId: string = '6ba84529-1770-4caa-bbcf-db2f2a3db6ab';

  constructor(private budgetsService: BudgetsService, private toastr: ToastrService, private expenseTypeService: ExpenseTypeService, private paymentMethodService: PaymentMethodService,) {}

  ngOnInit(): void {
    this.fetchBudgets();
  }

  fetchBudgets(): void {
    this.isLoading = true;
    this.budgetsService.getBudgetsByUser(this.userId).subscribe({
      next: (data) => {
        this.budgets = data;
        if (this.budgets.length > 0) {
          // Seleccionar el primer presupuesto por defecto
          this.selectedBudgetId = this.budgets[0].budgetId;
          this.onBudgetChange();
          this.fetchExpenseTypes();
          this.fetchPaymentMethods();
        }
      },
      error: (err) => this.handleError('Error al obtener presupuestos', err),
      complete: () => (this.isLoading = false),
    });
  }

  onBudgetChange(): void {
    // Encontrar el presupuesto seleccionado
    const selectedBudget = this.budgets.find(
      (budget) => budget.budgetId === this.selectedBudgetId
    );

    if (selectedBudget) {
      // Actualizar el presupuesto reciente
      this.recentBudget = selectedBudget;

      // Recargar los datos relacionados al presupuesto seleccionado
      this.fetchIncomes(this.recentBudget.budgetId);
      this.fetchExpenses(this.recentBudget.budgetId);
      this.fetchDailyExpenses(this.recentBudget.budgetId);
    }
  }

  fetchBudget(): void {
    this.isLoading = true;
    this.budgetsService.getBudgetById(this.userId, this.selectedBudgetId!).subscribe({
      next: (data) => {
        this.recentBudget = data;
      },
      error: (err) => this.handleError('Error al obtener presupuesto', err),
      complete: () => (this.isLoading = false),
    });
  }

  fetchIncomes(budgetId: string): void {
    this.isLoading = true;
    this.budgetsService.getIncomesByBudget(budgetId).subscribe({
      next: (data) => {
        this.incomes = data
        this.filteredIncomes = [...this.incomes];
      },
      error: (err) => this.handleError('Error al obtener ingresos', err),
      complete: () => (this.isLoading = false)
    });
  }

  fetchExpenses(budgetId: string): void {
    this.isLoading = true;
    this.budgetsService.getExpensesByBudget(budgetId).subscribe({
      next: (data) => {
        this.expenses = data;
        this.expenseDetails = data;
        this.filteredExpenses = [...this.expenses];
      },
      error: (err) => this.handleError('Error al obtener gastos', err),
      complete: () => (this.isLoading = false)
    });
  }

  fetchExpenseTypes(): void {
    this.expenseTypeService.getExpenseTypes().subscribe({
      next: (types) => (this.expenseTypes = types),
      error: (err) => console.error('Error al obtener tipos de gastos', err)
    });
  }

  fetchPaymentMethods(): void {
    this.paymentMethodService.getPaymentMethods().subscribe({
      next: (methods) => (this.paymentMethods = methods),
      error: (err) => console.error('Error al obtener métodos de pago', err)
    });
  }

  fetchDailyExpenses(budgetId: string): void {
    this.isLoading = true;
    this.budgetsService.getDailyExpensesByBudget(budgetId).subscribe({
      next: (data) => {
        this.dailyExpenses = data;
        this.filteredDailyExpenses = [...this.dailyExpenses];
      },
      error: (err) => this.handleError('Error al obtener gastos diarios', err),
      complete: () => (this.isLoading = false)
    });
  }

  toggleSection(section: 'incomes' | 'expenses' | 'dailyExpenses'): void {
    if (section === 'incomes') this.showIncomes = !this.showIncomes;
    if (section === 'expenses') this.showExpenses = !this.showExpenses;
    if (section === 'dailyExpenses') this.showDailyExpenses = !this.showDailyExpenses;
  }

  filterIncomes(): void {
    this.filteredIncomes = this.incomes.filter((income) =>
      income.name.toLowerCase().includes(this.incomeSearchTerm.toLowerCase())
    );
  }

  filterExpenses(): void {
    this.filteredExpenses = this.expenses.filter((expense) =>
      expense.customName.toLowerCase().includes(this.expenseSearchTerm.toLowerCase())
    );
  }

  filterDailyExpenses(): void {
    this.filteredDailyExpenses = this.dailyExpenses.filter((dailyExpense) =>
      dailyExpense.customName.toLowerCase().includes(this.dailyExpenseSearchTerm.toLowerCase())
    );
  }

  startEditingBudget(): void {
    if (!this.recentBudget) return;
    this.isEditingBudget = true;
    this.editableBudget = { ...this.recentBudget };
  }

  cancelEditingBudget(): void {
    this.isEditingBudget = false;
    this.editableBudget = {};
  }

  saveBudget(): void {
    if (!this.recentBudget || !this.editableBudget) return;

    this.isLoading = true;
    this.budgetsService.updateBudget(this.userId, this.recentBudget.budgetId, this.editableBudget).subscribe({
      next: (updatedBudget) => {
        this.handleSuccess('Presupuesto actualizado con éxito');
        this.recentBudget = updatedBudget;
        this.cancelEditingBudget();
      },
      error: (err) => this.handleError('Error al actualizar el presupuesto', err),
      complete: () => (this.isLoading = false)
    });
  }

  startEditingIncome(id: number): void {
    this.editingIncomeId = id;
  }

  saveIncome(income: Income): void {
    if (!this.recentBudget?.budgetId) return;

    this.isLoading = true;
    this.budgetsService
      .updateIncome(this.recentBudget.budgetId, income.incomeBudgetDetailId, income)
      .subscribe({
        next: () => {
          this.handleSuccess('Ingreso actualizado con éxito');
          this.cancelEditing();
          this.fetchBudget();
          this.fetchIncomes(this.recentBudget?.budgetId!);
        },
        error: (err) => this.handleError('Error al actualizar ingreso', err),
        complete: () => (this.isLoading = false)
      });
  }

  startEditingExpense(id: number): void {
    this.editingExpenseId = id;
  }

  saveExpense(expense: Expense): void {
    this.isLoading = true;
    this.budgetsService.updateExpense(expense).subscribe({
      next: () => {
        this.handleSuccess('Gasto actualizado con éxito');
        this.cancelEditing();
        this.fetchBudget();
        this.fetchExpenses(this.recentBudget?.budgetId!);
      },
      error: (err) => this.handleError('Error al actualizar gasto', err),
      complete: () => (this.isLoading = false)
    });
  }

  startEditingDailyExpense(id: number): void {
    this.editingDailyExpenseId = id;
  }

  saveDailyExpense(dailyExpense: DailyExpense): void {
    if (!this.recentBudget?.budgetId) return;

    this.isLoading = true;
    this.budgetsService
      .updateDailyExpense(
        this.recentBudget.budgetId,
        dailyExpense.expenseBudgetDetailId,
        dailyExpense.dailyExpenseRecordId,
        dailyExpense
      )
      .subscribe({
        next: () => {
          this.handleSuccess('Gasto diario actualizado con éxito');
          this.cancelEditing();
          this.fetchBudget();
          this.fetchExpenses(this.recentBudget?.budgetId!);
          this.fetchDailyExpenses(this.recentBudget?.budgetId!);
        },
        error: (err) => this.handleError('Error al actualizar gasto diario', err),
        complete: () => (this.isLoading = false)
      });
  }

  // Cancelar edición
  cancelEditing(): void {
    this.editingIncomeId = null;
    this.editingExpenseId = null;
    this.editingDailyExpenseId = null;
  }

  private handleSuccess(message: string): void {
    this.toastr.success(message, 'Éxito', { timeOut: 3000 });
  }

  private handleError(message: string, error: any): void {
    console.error(message, error);
    this.toastr.error(`${message}. Por favor, intente de nuevo.`, 'Error', { timeOut: 3000 });
  }

  private isRecentBudgetValid(): boolean {
    if (!this.recentBudget || !this.recentBudget.budgetId) {
      console.warn('El presupuesto reciente no es válido o no está definido.');
      return false;
    }
    return true;
  }

  deleteIncome(incomeId: number): void {
    if (!this.isRecentBudgetValid()) return;

    if (confirm('¿Estás seguro de que deseas eliminar este ingreso?')) {
      this.budgetsService.deleteIncome(this.recentBudget!.budgetId, incomeId).subscribe({
        next: () => {
          this.handleSuccess('Ingreso eliminado con éxito');
          this.fetchBudget();
          this.fetchIncomes(this.recentBudget!.budgetId);
        },
        error: (err) => {
          this.handleError('Ocurrió un error al eliminar el ingreso', err);
        }
      });
    }
  }

  deleteExpense(expenseId: number): void {
    if (!this.isRecentBudgetValid()) return;

    if (confirm('¿Estás seguro de que deseas eliminar este gasto presupuestado?')) {
      this.budgetsService.deleteExpense(this.recentBudget!.budgetId, expenseId).subscribe({
        next: () => {
          this.handleSuccess('Gasto eliminado con éxito');
          this.fetchBudget();
          this.fetchExpenses(this.recentBudget!.budgetId);
        },
        error: (err) => {
          this.handleError('Ocurrió un error al eliminar el gasto', err);
        }
      });
    }
  }

  deleteDailyExpense(dailyExpenseId: number, expenseDetailId: number): void {
    if (!this.isRecentBudgetValid()) return;

    if (confirm('¿Estás seguro de que deseas eliminar este gasto diario?')) {
      this.budgetsService.deleteDailyExpense(this.recentBudget!.budgetId, expenseDetailId, dailyExpenseId).subscribe({
        next: () => {
          this.handleSuccess('Gasto diario eliminado con éxito');
          this.fetchBudget();
          this.fetchExpenses(this.recentBudget?.budgetId!);
          this.fetchDailyExpenses(this.recentBudget!.budgetId);
        },
        error: (err) => {
          this.handleError('Ocurrió un error al eliminar el gasto diario', err);
        }
      });
    }
  }

  // Método para iniciar el proceso de agregar un ingreso
  startAddingIncome(): void {
    this.isAddingIncome = true;
    this.newIncome = {};
  }

  saveNewIncome(): void {
    if (!this.newIncome.name || !this.newIncome.amount || !this.recentBudget?.budgetId) {
      this.toastr.error('Por favor completa todos los campos.', 'Error');
      return;
    }

    const incomeRequest = {
      budgetId: this.recentBudget.budgetId,
      name: this.newIncome.name,
      amount: this.newIncome.amount
    };

    this.isLoading = true;
    this.budgetsService.addIncome(incomeRequest).subscribe({
      next: () => {
        this.handleSuccess('Ingreso agregado con éxito');
        this.isAddingIncome = false;
        this.fetchBudget();
        this.fetchIncomes(this.recentBudget?.budgetId!);
      },
      error: (err) => this.handleError('Error al agregar ingreso', err),
      complete: () => (this.isLoading = false)
    });
  }

  // Método para cancelar el proceso de agregar un ingreso
  cancelAddingIncome(): void {
    this.isAddingIncome = false;
    this.newIncome = {};
  }

  // Repetir lógica para Gastos y Gastos Diarios
  startAddingExpense(): void {
    this.isAddingExpense = true;
    this.newExpense = {};
  }

  saveNewExpense(): void {
    if (!this.newExpense.customName || !this.newExpense.budgetedAmount || !this.recentBudget?.budgetId) {
      this.toastr.error('Por favor completa todos los campos.', 'Error');
      return;
    }

    const expenseRequest = {
      budgetId: this.recentBudget.budgetId,
      customName: this.newExpense.customName,
      budgetedAmount: this.newExpense.budgetedAmount,
      expenseTypeId: this.newExpense.expenseTypeId ?? 0
    };

    this.isLoading = true;
    this.budgetsService.addExpense(expenseRequest).subscribe({
      next: () => {
        this.handleSuccess('Gasto agregado con éxito');
        this.isAddingExpense = false;
        this.fetchBudget();
        this.fetchExpenses(this.recentBudget?.budgetId!);
      },
      error: (err) => this.handleError('Error al agregar gasto', err),
      complete: () => (this.isLoading = false)
    });
  }

  cancelAddingExpense(): void {
    this.isAddingExpense = false;
    this.newExpense = {};
  }

  // Similar para Gastos Diarios
  startAddingDailyExpense(): void {
    this.isAddingDailyExpense = true;
    this.newDailyExpense = {};
  }

  saveNewDailyExpense(): void {
    if (
      !this.newDailyExpense.expenseBudgetDetailId ||
      !this.newDailyExpense.paymentDate ||
      !this.newDailyExpense.amount ||
      !this.newDailyExpense.paymentMethodId ||
      !this.newDailyExpense.detail ||
      !this.recentBudget?.budgetId
    ) {
      this.toastr.error('Por favor completa todos los campos.', 'Error');
      return;
    }

    const dailyExpenseRequest = {
      budgetId: this.recentBudget.budgetId,
      expenseBudgetDetailId: this.newDailyExpense.expenseBudgetDetailId,
      paymentDate: this.newDailyExpense.paymentDate,
      amount: this.newDailyExpense.amount,
      paymentMethodId: this.newDailyExpense.paymentMethodId,
      detail: this.newDailyExpense.detail,
      expenseTypeId: this.newDailyExpense.expenseTypeId ?? null
    };

    this.isLoading = true;
    this.budgetsService.addDailyExpense(dailyExpenseRequest).subscribe({
      next: () => {
        this.handleSuccess('Gasto diario agregado con éxito');
        this.isAddingDailyExpense = false;
        this.fetchBudget();
        this.fetchExpenses(this.recentBudget?.budgetId!);
        this.fetchDailyExpenses(this.recentBudget?.budgetId!);
      },
      error: (err) => this.handleError('Error al agregar gasto diario', err),
      complete: () => (this.isLoading = false)
    });
  }

  cancelAddingDailyExpense(): void {
    this.isAddingDailyExpense = false;
    this.newDailyExpense = {};
  }

  toggleAccordion(panelId: string): void {
    if (this.expandedPanels.has(panelId)) {
      this.expandedPanels.delete(panelId);
    } else {
      this.expandedPanels.add(panelId);
    }
  }

  isExpanded(panelId: string): boolean {
    return this.expandedPanels.has(panelId);
  }
}
