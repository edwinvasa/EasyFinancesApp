import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetsService } from '../../services/budgets.service';
import { Budget } from '../../interfaces/budget.interface';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-create-budget',
  templateUrl: './create-budget.component.html',
  styleUrls: ['./create-budget.component.css']
})
export class CreateBudgetComponent implements OnInit {
  budget: Partial<Budget> = {
    description: '',
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear()
  };

  // Esto debería venir de un sistema de autenticación
  userId: string | null = '';

  constructor(private budgetsService: BudgetsService, private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.userId = this.authService.getUserIdFromToken();
  }

  createBudget(): void {
    if (!this.userId) return;

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