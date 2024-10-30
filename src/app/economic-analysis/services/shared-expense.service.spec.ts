import { TestBed } from '@angular/core/testing';
import { SharedExpenseService } from './shared-expense.service';

describe('SharedExpenseService', () => {
  let service: SharedExpenseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedExpenseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add an expense', () => {
    const expense = { expenseTypeId: 1, expenseTypeNameAndCategory: 'Alquiler - Vivienda', amount: 1000 };
    service.addExpense(expense);

    const expenses = service.getExpenses();
    expect(expenses).toContain(expense);
  });

  it('should edit an existing expense', () => {
    const initialExpense = { expenseTypeId: 1, expenseTypeNameAndCategory: 'Alquiler - Vivienda', amount: 1000 };
    const updatedExpense = { expenseTypeId: 1, expenseTypeNameAndCategory: 'Alquiler - Vivienda', amount: 1200 };

    service.addExpense(initialExpense);
    service.editExpense(updatedExpense);

    const expenses = service.getExpenses();
    expect(expenses).toContain(updatedExpense);
    expect(expenses).not.toContain(initialExpense);
  });

  it('should remove an expense', () => {
    const expense1 = { expenseTypeId: 1, expenseTypeNameAndCategory: 'Alquiler - Vivienda', amount: 1000 };
    const expense2 = { expenseTypeId: 2, expenseTypeNameAndCategory: 'Transporte - Público', amount: 500 };

    service.addExpense(expense1);
    service.addExpense(expense2);
    service.removeExpense(expense1.expenseTypeId);

    const expenses = service.getExpenses();
    expect(expenses).not.toContain(expense1);
    expect(expenses).toContain(expense2);
  });

  it('should get the current list of expenses', () => {
    const expense = { expenseTypeId: 1, expenseTypeNameAndCategory: 'Alquiler - Vivienda', amount: 1000 };
    service.addExpense(expense);

    const expenses = service.getExpenses();
    expect(expenses).toEqual([expense]);
  });
});
