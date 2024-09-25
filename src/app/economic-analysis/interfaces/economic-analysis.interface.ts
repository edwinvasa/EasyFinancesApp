// interfaces/economic-analysis.interface.ts

export interface Expense {
  expenseTypeId: number;
  amount: number;
}

export interface EconomicAnalysisRequest {
  userId: string;
  monthlyIncome: number;
  additionalIncome: number;
  expenses: Expense[];
  receivesChristmasBonus: boolean;
  receivesMidYearBonus: boolean;
  christmasBonusAmount: number;
  midYearBonusAmount: number;
}

export interface EconomicAnalysisResponse {
  id: string;
  userId: string;
  monthlyIncome: number;
  additionalIncome: number;
  totalExpenses: number;
  suggestedPaymentAmount: number;
  christmasBonusAmount: number;
  midYearBonusAmount: number;
}
