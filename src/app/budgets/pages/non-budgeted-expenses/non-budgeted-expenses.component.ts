import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartData } from 'chart.js';
import { BudgetsService } from '../../services/budgets.service';

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
  userId: string = '6ba84529-1770-4caa-bbcf-db2f2a3db6ab';

  isLoading: boolean = true;

  constructor(private budgetsService: BudgetsService) {}

  ngOnInit(): void {
    this.processData();
  }

  processData(): void {
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
