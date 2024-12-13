import { Component, OnInit } from '@angular/core';
import { BudgetsService } from '../../services/budgets.service';
import { Budget } from '../../interfaces/budget.interface';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-budgets-list',
  templateUrl: './budgets-list.component.html',
  styleUrls: ['./budgets-list.component.css']
})
export class BudgetsListComponent implements OnInit {
  budgets: Budget[] = [];
  userId: string | null = '';

  constructor(private budgetsService: BudgetsService, private authService: AuthService) {}

  ngOnInit(): void {
    this.userId = this.authService.getUserIdFromToken();
    if (this.userId) {
      this.fetchBudgets();
    } else {
      console.error('No se pudo obtener el usuario del token.', 'Error');
    }
  }

  fetchBudgets(): void {
    if (!this.userId) return;

    this.budgetsService.getBudgetsByUser(this.userId).subscribe({
      next: (data) => (this.budgets = data),
      error: (err) => console.error('Error al obtener presupuestos', err)
    });
  }

  confirmDelete(budgetId: string): void {
    const confirmation = confirm('¿Estás seguro de que deseas eliminar este presupuesto?');
    if (confirmation) {
      this.deleteBudget(budgetId);
    }
  }

  deleteBudget(budgetId: string): void {
    if (!this.userId) return;

    this.budgetsService.deleteBudget(this.userId, budgetId).subscribe({
      next: () => {
        alert('Presupuesto eliminado con éxito');
        this.fetchBudgets(); // Refrescar la lista después de la eliminación
      },
      error: (err) => {
        console.error('Error al eliminar el presupuesto', err);
        alert('Ocurrió un error al eliminar el presupuesto');
      }
    });
  }
}
