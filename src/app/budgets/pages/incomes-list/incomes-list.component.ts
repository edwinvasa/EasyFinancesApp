import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BudgetsService } from '../../services/budgets.service';
import { Income } from '../../interfaces/income.interface';

@Component({
  selector: 'app-incomes-list',
  templateUrl: './incomes-list.component.html',
  styleUrls: ['./incomes-list.component.css']
})
export class IncomesListComponent implements OnInit {
  incomes: Income[] = [];
  budgetId: string | null = null;

  constructor(private route: ActivatedRoute, private budgetsService: BudgetsService) {}

  ngOnInit(): void {
    this.budgetId = this.route.snapshot.paramMap.get('budgetId');
    if (this.budgetId) {
      this.fetchIncomes(this.budgetId);
    }
  }

  fetchIncomes(budgetId: string): void {
    this.budgetsService.getIncomesByBudget(budgetId).subscribe({
      next: (data) => (this.incomes = data),
      error: (err) => console.error('Error al obtener ingresos', err)
    });
  }

  confirmDelete(incomeId: number): void {
    const confirmation = confirm('¿Estás seguro de que deseas eliminar este ingreso?');
    if (confirmation && this.budgetId) {
      this.deleteIncome(this.budgetId, incomeId);
    }
  }

  deleteIncome(budgetId: string, incomeId: number): void {
    this.budgetsService.deleteIncome(budgetId, incomeId).subscribe({
      next: () => {
        alert('Ingreso eliminado con éxito');
        this.fetchIncomes(budgetId); // Actualizar la lista de ingresos después de la eliminación
      },
      error: (err) => {
        console.error('Error al eliminar el ingreso', err);
        alert('Ocurrió un error al eliminar el ingreso');
      }
    });
  }

}
