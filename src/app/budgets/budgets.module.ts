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
    MainBudgetComponent
  ],
  imports: [
    CommonModule,
    BudgetsRoutingModule,
    CurrencyMaskModule,
    FormsModule,
    SharedModule
  ]
})
export class BudgetsModule { }
