import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BudgetsRoutingModule } from './budgets-routing.module';
import { BudgetsListComponent } from './pages/budgets-list/budgets-list.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { SharedModule } from '../shared/shared.module';
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
import { MainBudgetComponent } from './main-budget/main-budget.component';
import { NgChartsModule } from 'ng2-charts';
import { BudgetPlanVsExecutedComponent } from './pages/budget-plan-vs-executed/budget-plan-vs-executed.component';
import { ExpenseDistributionComponent } from './pages/expense-distribution/expense-distribution.component';
import { IncomeExpenseTrendsComponent } from './pages/income-expense-trends/income-expense-trends.component';
import { NonBudgetedExpensesComponent } from './pages/non-budgeted-expenses/non-budgeted-expenses.component';
import { PaymentStatusComponent } from './pages/payment-status/payment-status.component';
import { DailyExpenseTrendsComponent } from './pages/daily-expense-trends/daily-expense-trends.component';

@NgModule({
  declarations: [
    BudgetsListComponent,
    CreateBudgetComponent,
    CloneBudgetComponent,
    UpdateBudgetComponent,
    ExpensesListComponent,
    AddExpenseComponent,
    UpdateExpenseComponent,
    IncomesListComponent,
    AddIncomeComponent,
    UpdateIncomeComponent,
    DailyExpensesListComponent,
    AddDailyExpenseComponent,
    UpdateDailyExpenseComponent,
    MainBudgetComponent,
    BudgetPlanVsExecutedComponent,
    ExpenseDistributionComponent,
    IncomeExpenseTrendsComponent,
    NonBudgetedExpensesComponent,
    PaymentStatusComponent,
    DailyExpenseTrendsComponent
  ],
  imports: [
    CommonModule,
    BudgetsRoutingModule,
    CurrencyMaskModule,
    FormsModule,
    SharedModule,
    NgChartsModule
  ]
})
export class BudgetsModule { }
