import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BudgetsService } from '../../services/budgets.service';
import { Budget } from '../../interfaces/budget.interface';
import { AuthService } from '../../../shared/services/auth.service';

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
  userId: string | null = '';

  constructor(
    private route: ActivatedRoute,
    private budgetsService: BudgetsService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userId = this.authService.getUserIdFromToken();
    if (this.userId) {

      this.budgetId = this.route.snapshot.paramMap.get('budgetId');
      if (this.budgetId) {
        this.fetchBudgetData(this.budgetId);
      }
    } else {
      console.error('No se pudo obtener el usuario del token.', 'Error');
    }
  }

  fetchBudgetData(budgetId: string): void {
    if (!this.userId) return;

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
    if (!this.userId || !this.budgetId) return;

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
