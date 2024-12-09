import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BudgetsService } from '../../services/budgets.service';
import { Budget } from '../../interfaces/budget.interface';

@Component({
  selector: 'app-update-budget',
  templateUrl: './update-budget.component.html',
  styleUrls: ['./update-budget.component.css']
})
export class UpdateBudgetComponent implements OnInit {
  budgetId: string | null = null;
  budgetData: Partial<Budget> = {
    description: '',
    month: 1,
    year: new Date().getFullYear()
  };
  userId: string = '6ba84529-1770-4caa-bbcf-db2f2a3db6ab'; // Reemplazar con usuario autenticado

  constructor(
    private route: ActivatedRoute,
    private budgetsService: BudgetsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.budgetId = this.route.snapshot.paramMap.get('budgetId');
    if (this.budgetId) {
      this.fetchBudgetData(this.budgetId);
    }
  }

  fetchBudgetData(budgetId: string): void {
    this.budgetsService.getBudgetById(this.userId, budgetId).subscribe({
      next: (budget) => {
        this.budgetData = {
          description: budget.description,
          month: budget.month,
          year: budget.year
        };
      },
      error: (err) => {
        console.error('Error al obtener presupuesto', err);
        alert('No se pudo cargar el presupuesto');
        this.router.navigate(['/budgets']);
      }
    });
  }

  updateBudget(): void {
    if (!this.budgetId) return;

    const updateRequest = {
      ...this.budgetData
    };

    this.budgetsService.updateBudget(this.userId, this.budgetId, updateRequest).subscribe({
      next: () => {
        alert('Presupuesto actualizado con éxito');
        this.router.navigate(['/budgets']);
      },
      error: (err) => {
        console.error('Error al actualizar el presupuesto', err);
        alert('Ocurrió un error al actualizar el presupuesto');
      }
    });
  }
}
