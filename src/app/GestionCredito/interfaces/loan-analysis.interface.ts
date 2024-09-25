export interface Installment {
  installmentNumber: number;
  principalOwed: number;
  principalPaid: number;
  interestPaid: number;
  totalPayment: number;
  remainingBalance: number;
  amortizationType: string;
}

export interface LoanAnalysis {
  totalInterestWithoutRepayment: number;
  monthsWithoutRepayment: number;
  totalInterestWithRepayment: number;
  interestSaved: number;
  monthsWithRepayment: number;
  monthsSaved: number;
}

export interface Suggestion {
  bankName: string;
  suggestedBankRate: number;
  bankMaxRate: number;
  currentRate: number;
  message: string;
}

export interface LoanAnalysisResponse {
  withoutCapitalRepayment: Installment[];
  withCapitalRepayment?: Installment[];
  analysis: LoanAnalysis;
  suggestion: Suggestion | null;
}
