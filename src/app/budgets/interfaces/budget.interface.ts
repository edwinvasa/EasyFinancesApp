export interface Budget {
  budgetId: string;
  userId: string;
  month: number;
  year: number;
  description: string;
  totalIncome: number;
  totalExpenses: number;
  executed: number;
  nonBudgetedExpenses: number;
  pendingPayment: number;
  shouldHave: number;
  createdAt: string;
  updatedAt: string;
}
