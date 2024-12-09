import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetsService } from '../../services/budgets.service';
import { Budget } from '../../interfaces/budget.interface';

@Component({
  selector: 'app-create-budget',
  templateUrl: './create-budget.component.html',
  styleUrls: ['./create-budget.component.css']
})
export class CreateBudgetComponent {
  budget: Partial<Budget> = {
    description: '',
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear()
  };

  // Esto debería venir de un sistema de autenticación
  userId: string = '6ba84529-1770-4caa-bbcf-db2f2a3db6ab';

  constructor(private budgetsService: BudgetsService, private router: Router) {}

  createBudget(): void {
    const budgetRequest = {
      ...this.budget,
      userId: this.userId
    };

    this.budgetsService.createBudget(budgetRequest).subscribe({
      next: (data) => {
        alert('Presupuesto creado con éxito');
        this.router.navigate(['/budgets']);
      },
      error: (err) => {
        console.error('Error al crear el presupuesto', err);
        alert('Ocurrió un error al crear el presupuesto');
      }
    });
  }
}
