export interface DailyExpense {
  dailyExpenseRecordId: number;
  expenseBudgetDetailId: number;
  budgetId: string;
  customName: string;
  expenseTypeName: string;
  expenseTypeCategory: string;
  paymentDate: string;
  amount: number;
  paymentMethodId: number;
  paymentMethodName: number;
  detail: string;
  expenseTypeId?: number;
  createdAt: string;
  updatedAt: string;
}
