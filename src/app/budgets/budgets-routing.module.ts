import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetsListComponent } from './pages/budgets-list/budgets-list.component';
import { CreateBudgetComponent } from './pages/create-budget/create-budget.component';
import { CloneBudgetComponent } from './pages/clone-budget/clone-budget.component';
import { UpdateBudgetComponent } from './pages/update-budget/update-budget.component';
import { ExpensesListComponent } from './pages/expenses-list/expenses-list.component';
import { AddExpenseComponent } from './pages/add-expense/add-expense.component';
import { UpdateExpenseComponent } from './pages/update-expense/update-expense.component';
import { IncomesListComponent } from './pages/incomes-list/incomes-list.component';
import { AddIncomeComponent } from './pages/add-income/add-income.component';
import { UpdateIncomeComponent } from './pages/update-income/update-income.component';
import { DailyExpensesListComponent } from './pages/daily-expenses-list/daily-expenses-list.component';
import { AddDailyExpenseComponent } from './pages/add-daily-expense/add-daily-expense.component';
import { UpdateDailyExpenseComponent } from './pages/update-daily-expense/update-daily-expense.component';
import { BudgetChartsComponent } from './pages/budget-charts/budget-charts.component';
import { BudgetPlanVsExecutedComponent } from './pages/budget-plan-vs-executed/budget-plan-vs-executed.component';
import { ExpenseDistributionComponent } from './pages/expense-distribution/expense-distribution.component';
import { IncomeExpenseTrendsComponent } from './pages/income-expense-trends/income-expense-trends.component';
import { NonBudgetedExpensesComponent } from './pages/non-budgeted-expenses/non-budgeted-expenses.component';
import { PaymentStatusComponent } from './pages/payment-status/payment-status.component';

const routes: Routes = [
  {
    path: '',
    component: BudgetsListComponent
  },
  {
    path: 'create',
    component: CreateBudgetComponent
  },
  {
    path: 'clone/:budgetId',
    component: CloneBudgetComponent
  },
  {
    path: 'update/:budgetId',
    component: UpdateBudgetComponent
  },
  {
    path: 'expenses/:budgetId',
    component: ExpensesListComponent
  },
  {
    path: 'expenses/add/:budgetId',
    component: AddExpenseComponent
  },
  {
    path: 'expenses/update/:budgetId/:expenseId',
    component: UpdateExpenseComponent
  },
  {
    path: 'incomes/:budgetId',
    component: IncomesListComponent
  },
  {
    path: 'incomes/add/:budgetId',
    component: AddIncomeComponent
  },
  {
    path: 'incomes/update/:budgetId/:incomeId',
    component: UpdateIncomeComponent
  },
  {
    path: 'daily-expenses/:budgetId',
    component: DailyExpensesListComponent
  },
  {
    path: 'daily-expenses/add/:budgetId',
    component: AddDailyExpenseComponent
  },
  {
    path: 'daily-expenses/update/:budgetId/:expenseBudgetDetailId/:dailyExpenseRecordId',
    component: UpdateDailyExpenseComponent
  },
  { path: 'charts', component: BudgetChartsComponent },
  { path: 'charts/plan-vs-executed', component: BudgetPlanVsExecutedComponent },
  { path: 'charts/expense-distribution', component: ExpenseDistributionComponent },
  { path: 'charts/income-expense-trends', component: IncomeExpenseTrendsComponent },
  { path: 'charts/non-budgeted-expenses', component: NonBudgetedExpensesComponent },
  { path: 'charts/payment-status', component: PaymentStatusComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetsRoutingModule {}
