import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartData } from 'chart.js';
import { BudgetsService } from '../../services/budgets.service';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-non-budgeted-expenses',
  templateUrl: './non-budgeted-expenses.component.html',
  styleUrls: ['./non-budgeted-expenses.component.css']
})
export class NonBudgetedExpensesComponent implements OnInit {
  chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  chartType: ChartType = 'bar';
  chartData: ChartData<'bar'> = {
    labels: [],
    datasets: [],
  };
  userId: string | null = '';

  isLoading: boolean = true;

  constructor(private budgetsService: BudgetsService, private authService: AuthService) {}

  ngOnInit(): void {
    this.userId = this.authService.getUserIdFromToken();
    if (this.userId) {
      this.processData();
    } else {
      console.error('No se pudo obtener el usuario del token.', 'Error');
    }
  }

  processData(): void {
    if (!this.userId) return;

    this.budgetsService.getBudgetsByUser(this.userId).subscribe(budgets => {
      if (budgets.length > 0) {
        this.chartData.labels = budgets.map(b => `${b.month}/${b.year}`);
        this.chartData.datasets = [
          {
            data: budgets.map(b => b.nonBudgetedExpenses),
            label: 'Gastos No Presupuestados',
            backgroundColor: 'rgba(255, 159, 64, 0.6)',
          },
        ];
      } else {
        console.error('No se recibieron datos del servidor.');
      }
      this.isLoading = false;
    }, error => {
      console.error('Error al obtener los datos del servidor:', error);
      this.isLoading = false;
    });
  }
}
