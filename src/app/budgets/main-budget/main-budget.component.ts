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
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

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

  expenseTypes: ExpenseType[] = [];
  paymentMethods: PaymentMethod[] = [];
  expenseDetails: any[] = [];

  userId: string | null = '';

  isCreatingBudgetModalVisible = false;
  isEditingBudgetModalVisible = false;
  isCloneModalVisible = false;
  isAddExpenseModalVisible = false;
  isAddIncomeModalVisible = false;
  isAddDailyExpenseModalVisible = false;

  // Variables para paginación ingresos
  pageSize: number = 5;
  currentPage: number = 1;
  totalPages: number = 0;

  // Variables para paginaciónGastos
  pageSizeExpenses: number = 5;
  currentPageExpenses: number = 1;
  totalPagesExpenses: number = 0;

  // Variables para paginación Gastos diarios
  pageSizeDailyExpenses: number = 5;
  currentPageDailyExpenses: number = 1;
  totalPagesDailyExpenses: number = 0;

  constructor(private budgetsService: BudgetsService, private toastr: ToastrService, private expenseTypeService: ExpenseTypeService, private paymentMethodService: PaymentMethodService,
    private authService: AuthService, private router: Router
  ) {}

  ngOnInit(): void {
    this.userId = this.authService.getUserIdFromToken();
    if (this.userId) {
      this.fetchBudgets();
    } else {
      this.toastr.error('No se pudo obtener el usuario del token.', 'Error');
    }
  }

  fetchBudgets(): void {
    if (!this.userId) return;

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
        } else {
          //this.router.navigate(['create']);
        }
      },
      error: (err) => this.handleError('Error al obtener presupuestos', err),
      complete: () => (this.isLoading = false),
    });
    this.isLoading = false
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
    if (!this.userId) return;

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
    this.updateTotalPages();
  }

  updateTotalPages(): void {
    this.totalPages = Math.ceil(this.filteredIncomes.length / this.pageSize);
  }

  getPages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  filterIncomes(): void {
    this.filteredIncomes = this.incomes.filter((income) =>
      income.name.toLowerCase().includes(this.incomeSearchTerm.toLowerCase())
    );
    this.currentPage = 1;
    this.updateTotalPages();
  }

  clearIncomeSearch(): void {
    this.incomeSearchTerm = '';
    this.filterIncomes();
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
    this.updateTotalPagesExpenses();
  }

  updateTotalPagesExpenses(): void {
    this.totalPagesExpenses = Math.ceil(this.filteredExpenses.length / this.pageSizeExpenses);
  }

  getPagesExpenses(): number[] {
    return Array.from({ length: this.totalPagesExpenses }, (_, i) => i + 1);
  }

  filterExpenses(): void {
    this.filteredExpenses = this.expenses.filter((expense) =>
      expense.customName.toLowerCase().includes(this.expenseSearchTerm.toLowerCase())
    );
    this.currentPageExpenses = 1;
    this.updateTotalPagesExpenses();
  }

  clearExpensesSearch(): void {
    this.expenseSearchTerm = '';
    this.filterExpenses();
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
    this.updateTotalPagesDailyExpenses();
  }

  updateTotalPagesDailyExpenses(): void {
    this.totalPagesDailyExpenses = Math.ceil(this.filteredDailyExpenses.length / this.pageSizeDailyExpenses);
  }

  getPagesDailyExpenses(): number[] {
    return Array.from({ length: this.totalPagesDailyExpenses }, (_, i) => i + 1);
  }

  filterDailyExpenses(): void {
    this.filteredDailyExpenses = this.dailyExpenses.filter((dailyExpense) =>
      dailyExpense.customName.toLowerCase().includes(this.dailyExpenseSearchTerm.toLowerCase())
    );
    this.currentPageDailyExpenses = 1; // Reset paginación al filtrar
    this.updateTotalPagesDailyExpenses();
  }

  clearDailyExpensesSearch(): void {
    this.dailyExpenseSearchTerm = '';
    this.filterDailyExpenses();
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
    if (!this.userId) return;

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
    this.isLoading = false;
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

  confirmDeleteBudget(): void {
    if (!this.recentBudget || !this.recentBudget.budgetId) {
      this.toastr.error('No hay un presupuesto seleccionado para eliminar.', 'Error');
      return;
    }

    const confirmation = confirm('¿Estás seguro de que deseas eliminar este presupuesto?');
    if (confirmation) {
      this.deleteBudget(this.recentBudget.budgetId);
    }
  }

  deleteBudget(budgetId: string): void {
    if (!this.userId) return;

    this.isLoading = true;
    this.budgetsService.deleteBudget(this.userId, budgetId).subscribe({
      next: () => {
        this.handleSuccess('Presupuesto eliminado con éxito');
        this.fetchBudgets();
        this.isLoading = false;
      },
      error: (err) => this.handleError('Error al eliminar el presupuesto', err),
      complete: () => (this.isLoading = false),
    });
  }

  openCreatingBudgetModal(): void {
      this.isCreatingBudgetModalVisible = true;
  }

  closeCreatingBudgetModal(event: any): void {
    this.fetchBudgets();
    this.isCreatingBudgetModalVisible = false;
  }

  openEditingBudgetModal(): void {
    if (this.recentBudget) {
      this.isEditingBudgetModalVisible = true;
    } else {
      this.toastr.error('Debe seleccionar un presupuesto para editar.', 'Error');
    }
  }

  closeEdditingBudgetModal(event: any): void {
    this.fetchBudgets();
    this.isEditingBudgetModalVisible = false;
  }

  openCloneModal(): void {
    if (this.recentBudget) {
      this.isCloneModalVisible = true;
    } else {
      this.toastr.error('Debe seleccionar un presupuesto para clonar.', 'Error');
    }
  }

  closeCloneModal(event: any): void {
    this.fetchBudgets();
    this.isCloneModalVisible = false;
  }

  openAddExpenseModal(): void {
    if (this.recentBudget) {
      this.isAddExpenseModalVisible = true;
    } else {
      this.toastr.error('Debe seleccionar un presupuesto antes de agregar gastos.', 'Error');
    }
  }

  closeAddExpenseModal(event: any): void {
    this.isAddExpenseModalVisible = false;
    if (this.recentBudget?.budgetId) {
      this.fetchBudget();
      this.fetchExpenses(this.recentBudget?.budgetId!);
    }
  }

  openAddIncomeModal(): void {
    if (this.recentBudget) {
      this.isAddIncomeModalVisible = true;
    } else {
      this.toastr.error('Debe seleccionar un presupuesto antes de agregar ingresos.', 'Error');
    }
  }

  closeAddIncomeModal(event: any): void {
    this.isAddIncomeModalVisible = false;
    if (this.recentBudget?.budgetId) {
      this.fetchBudget();
      this.fetchIncomes(this.recentBudget?.budgetId!);
    }
  }

  openAddDailyExpenseModal(): void {
    if (this.recentBudget) {
      this.isAddDailyExpenseModalVisible = true;
    } else {
      this.toastr.error('Debe seleccionar un presupuesto antes de agregar gastos diarios.', 'Error');
    }
  }

  closeAddDailyExpenseModal(event: any): void {
    this.isAddDailyExpenseModalVisible = false;
    if (this.recentBudget?.budgetId) {
      this.fetchBudget();
      this.fetchExpenses(this.recentBudget?.budgetId!);
      this.fetchDailyExpenses(this.recentBudget?.budgetId!);
    }
  }

}
