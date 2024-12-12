import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartData } from 'chart.js';
import { BudgetsService } from '../../services/budgets.service';

@Component({
  selector: 'app-income-expense-trends',
  templateUrl: './income-expense-trends.component.html',
  styleUrls: ['./income-expense-trends.component.css']
})
export class IncomeExpenseTrendsComponent implements OnInit {
  chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  chartType: ChartType = 'line';
  chartData: ChartData<'line'> = {
    labels: [],
    datasets: [],
  };

  isLoading: boolean = true;
  userId: string = '6ba84529-1770-4caa-bbcf-db2f2a3db6ab';

  constructor(private budgetsService: BudgetsService) {}

  ngOnInit(): void {
    this.fetchBudgetData();
  }

  fetchBudgetData(): void {
    this.budgetsService.getBudgetsByUser(this.userId).subscribe(budgets => {
      if (budgets.length > 0) {
        this.chartData.labels = budgets.map(b => `${b.month}/${b.year}`);
        this.chartData.datasets = [
          {
            data: budgets.map(b => b.totalIncome),
            label: 'Ingresos',
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
          },
          {
            data: budgets.map(b => b.totalExpenses),
            label: 'Gastos',
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: true,
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
