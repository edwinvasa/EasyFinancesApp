import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BudgetsService } from '../../services/budgets.service';
import { Budget } from '../../interfaces/budget.interface';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-clone-budget',
  templateUrl: './clone-budget.component.html',
  styleUrls: ['./clone-budget.component.css']
})
export class CloneBudgetComponent implements OnInit {
  budgetToClone: Budget | null = null;
  cloneData = {
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
    description: '',
    cloneIncomeDetails: true
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
      const budgetId = this.route.snapshot.paramMap.get('budgetId');
      if (budgetId) {
        this.fetchBudgetToClone(budgetId);
      }
    } else {
      console.error('No se pudo obtener el usuario del token.', 'Error');
    }
  }

  fetchBudgetToClone(budgetId: string): void {
    if (!this.userId) return;

    this.budgetsService.getBudgetById(this.userId, budgetId).subscribe({
      next: (budget) => (this.budgetToClone = budget),
      error: (err) => {
        console.error('Error al obtener el presupuesto', err);
        alert('No se pudo cargar el presupuesto a clonar');
        this.router.navigate(['/budgets']);
      }
    });
  }

  cloneBudget(): void {
    const cloneRequest = {
      budgetId: this.budgetToClone?.budgetId,
      userId: this.userId,
      ...this.cloneData
    };

    this.budgetsService.cloneBudget(cloneRequest).subscribe({
      next: () => {
        alert('Presupuesto clonado con éxito');
        this.router.navigate(['/budgets']);
      },
      error: (err) => {
        console.error('Error al clonar el presupuesto', err);
        alert('Ocurrió un error al clonar el presupuesto');
      }
    });
  }
}
