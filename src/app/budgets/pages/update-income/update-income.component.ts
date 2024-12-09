import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BudgetsService } from '../../services/budgets.service';
import { Income } from '../../interfaces/income.interface';

@Component({
  selector: 'app-update-income',
  templateUrl: './update-income.component.html',
  styleUrls: ['./update-income.component.css']
})
export class UpdateIncomeComponent implements OnInit {
  budgetId: string | null = null;
  incomeId: number | null = null;
  incomeData: Partial<Income> = {
    name: '',
    amount: 0
  };

  constructor(
    private route: ActivatedRoute,
    private budgetsService: BudgetsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.budgetId = this.route.snapshot.paramMap.get('budgetId');
    this.incomeId = Number(this.route.snapshot.paramMap.get('incomeId'));
    if (this.budgetId && this.incomeId) {
      this.fetchIncomeData(this.budgetId, this.incomeId);
    }
  }

  fetchIncomeData(budgetId: string, incomeId: number): void {
    this.budgetsService.getIncomesByBudget(budgetId).subscribe({
      next: (incomes) => {
        const income = incomes.find((i) => i.incomeBudgetDetailId === incomeId);
        if (income) {
          this.incomeData = {
            name: income.name,
            amount: income.amount
          };
        }
      },
      error: (err) => console.error('Error al obtener ingreso', err)
    });
  }

  updateIncome(): void {
    if (!this.budgetId || !this.incomeId) return;

    const updateRequest = {
      name: this.incomeData.name,
      amount: this.incomeData.amount
    };

    this.budgetsService.updateIncome(this.budgetId, this.incomeId, updateRequest).subscribe({
      next: () => {
        alert('Ingreso actualizado con éxito');
        this.router.navigate([`/budgets/incomes/${this.budgetId}`]);
      },
      error: (err) => {
        console.error('Error al actualizar ingreso', err);
        alert('Ocurrió un error al actualizar el ingreso');
      }
    });
  }
}
