import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BudgetsService } from '../../services/budgets.service';

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.css']
})
export class AddIncomeComponent implements OnInit {
  budgetId: string | null = null;
  incomeData = {
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
  }

  addIncome(): void {
    if (!this.budgetId) return;

    const incomeRequest = {
      ...this.incomeData,
      budgetId: this.budgetId
    };

    this.budgetsService.addIncome(incomeRequest).subscribe({
      next: () => {
        alert('Ingreso agregado con éxito');
        this.router.navigate([`/budgets/incomes/${this.budgetId}`]);
      },
      error: (err) => {
        console.error('Error al agregar ingreso', err);
        alert('Ocurrió un error al agregar el ingreso');
      }
    });
  }
}
