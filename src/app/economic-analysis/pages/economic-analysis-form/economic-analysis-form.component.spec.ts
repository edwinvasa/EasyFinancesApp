import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms'; 
import { CustomCurrencyPipe } from '../../../utils/pipes/custom-currency.pipe';
import { EconomicAnalysisService } from '../../services/economic-analysis.service';
import { ExpenseTypeService } from '../../services/expense-type.service';
import { SharedExpenseService } from '../../services/shared-expense.service';
import { EconomicAnalysisFormComponent } from './economic-analysis-form.component';
import { ExpenseType } from '../../interfaces/expense-type.interface';

describe('EconomicAnalysisFormComponent', () => {
  let component: EconomicAnalysisFormComponent;
  let fixture: ComponentFixture<EconomicAnalysisFormComponent>;
  let economicAnalysisService: jasmine.SpyObj<EconomicAnalysisService>;
  let expenseTypeService: jasmine.SpyObj<ExpenseTypeService>;
  let sharedExpenseService: jasmine.SpyObj<SharedExpenseService>;

  beforeEach(async () => {
    const economicAnalysisSpy = jasmine.createSpyObj('EconomicAnalysisService', ['analyzeEconomicCapacity']);
    const expenseTypeSpy = jasmine.createSpyObj('ExpenseTypeService', ['getExpenseTypes']);
    const sharedExpenseSpy = jasmine.createSpyObj('SharedExpenseService', ['getExpenses', 'addExpense', 'editExpense', 'removeExpense']);

    // Configurar el retorno del mock de getExpenseTypes
    expenseTypeSpy.getExpenseTypes.and.returnValue(of([
      { id: 1, name: 'Alquiler', category: 'Vivienda' },
      { id: 2, name: 'Transporte', category: 'Transporte' }
    ]));

    // Configurar el retorno del mock de getExpenses
    sharedExpenseSpy.getExpenses.and.returnValue([
      { expenseTypeId: 1, expenseTypeNameAndCategory: 'Alquiler - Vivienda', amount: 500 }
    ]);

    await TestBed.configureTestingModule({
      declarations: [EconomicAnalysisFormComponent, CustomCurrencyPipe],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [
        { provide: EconomicAnalysisService, useValue: economicAnalysisSpy },
        { provide: ExpenseTypeService, useValue: expenseTypeSpy },
        { provide: SharedExpenseService, useValue: sharedExpenseSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EconomicAnalysisFormComponent);
    component = fixture.componentInstance;
    economicAnalysisService = TestBed.inject(EconomicAnalysisService) as jasmine.SpyObj<EconomicAnalysisService>;
    expenseTypeService = TestBed.inject(ExpenseTypeService) as jasmine.SpyObj<ExpenseTypeService>;
    sharedExpenseService = TestBed.inject(SharedExpenseService) as jasmine.SpyObj<SharedExpenseService>;

    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should select an expense type', () => {
    const expenseType: ExpenseType = { id: 1, name: 'Alquiler', category: 'Vivienda' };
    component.selectExpense(expenseType);
    expect(component.selectedExpense).toEqual(expenseType);
    expect(component.showAmountInput).toBeTrue();
  });

  it('should confirm amount and add a new expense', () => {
    component.selectedExpense = { id: 1, name: 'Alquiler', category: 'Vivienda' };
    component.amountInput = 1000;

    component.confirmAmount();

    expect(sharedExpenseService.addExpense).toHaveBeenCalled();
    expect(component.showAmountInput).toBeFalse();
    expect(component.expenses.length).toBeGreaterThan(0);
  });

  it('should not add expense if amount is invalid', () => {
    component.selectedExpense = { id: 1, name: 'Alquiler', category: 'Vivienda' };
    component.amountInput = 0;
    component.confirmAmount();

    expect(sharedExpenseService.addExpense).not.toHaveBeenCalled();
    expect(component.errorMessage).toBe('Por favor, ingrese un monto válido.');
  });

  it('should edit an existing expense', () => {
    const expense = { expenseTypeId: 1, expenseTypeNameAndCategory: 'Alquiler - Vivienda', amount: 500 };
    component.editExpense(expense);

    expect(component.selectedExpense?.id).toEqual(1);
    expect(component.amountInput).toEqual(500);
  });

  it('should confirm edited amount', () => {
    component.selectedExpense = { id: 1, name: 'Alquiler', category: 'Vivienda' };
    component.amountInput = 800;
    component.expenses = [{ expenseTypeId: 1, expenseTypeNameAndCategory: 'Alquiler - Vivienda', amount: 500 }];

    component.confirmEditAmount();
    expect(sharedExpenseService.editExpense).toHaveBeenCalledWith(jasmine.objectContaining({ amount: 800 }));
  });

  it('should remove an expense', () => {
    component.expenses = [{ expenseTypeId: 1, expenseTypeNameAndCategory: 'Alquiler - Vivienda', amount: 500 }];
  
    sharedExpenseService.removeExpense.and.callFake((expenseId: number) => {
      component.expenses = component.expenses.filter(expense => expense.expenseTypeId !== expenseId);
    });
  
    sharedExpenseService.getExpenses.and.returnValue([]);
  
    component.removeExpense(1);
  
    expect(sharedExpenseService.removeExpense).toHaveBeenCalledWith(1);
    expect(component.expenses.length).toBe(0);
  });

  it('should load and group expense types', fakeAsync(() => {
    component.loadExpenseTypes();
    tick();

    expect(component.expenseTypes.length).toBe(2);
    expect(component.groupedExpenseTypes['Vivienda'].length).toBe(1);
  }));

  it('should filter expenses based on search term', () => {
    component.expenses = sharedExpenseService.getExpenses();
    component.searchTerm = 'Alquiler';
  
    component.filterExpenses();
  
    expect(component.filteredExpenseTypes).toBeDefined();
    expect(component.filteredExpenseTypes['Vivienda']?.length || 0).toBe(0);
  });
});
