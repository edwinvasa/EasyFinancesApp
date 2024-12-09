export interface Expense {
  expenseBudgetDetailId: number;
  budgetId: string;
  expenseTypeId: number;
  customName: string;
  expenseTypeName: string;
  expenseTypeCategory: string;
  budgetedAmount: number;
  isEnabled: boolean;
  amountPaid: number;
  pendingPayment: number;
  createdAt: string;
  updatedAt: string;
}
