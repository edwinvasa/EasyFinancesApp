import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartData } from 'chart.js';
import { BudgetsService } from '../../services/budgets.service';

@Component({
  selector: 'app-budget-charts',
  templateUrl: './budget-charts.component.html',
  styleUrls: ['./budget-charts.component.css']
})
export class BudgetChartsComponent implements OnInit {
  chartOptions: ChartOptions = {
    responsive: true,
  };

  userId: string = '6ba84529-1770-4caa-bbcf-db2f2a3db6ab';
  chartType: ChartType = 'bar';
  chartLabels: string[] = [];
  chartData: ChartData<'bar'> = {
    labels: [],
    datasets: [],
  };
  isLoading: boolean = true;

  constructor(private budgetsService: BudgetsService) {}

  ngOnInit(): void {
    this.fetchBudgetData();
  }

  fetchBudgetData(): void {
    this.isLoading = true;
    this.budgetsService.getBudgetsByUser(this.userId).subscribe(budgets => {
      if (budgets.length > 0) {
        this.chartData.labels = budgets.map(b => `${b.month}/${b.year}`);
        this.chartData.datasets = [
          { data: budgets.map(b => b.totalIncome), label: 'Ingresos', backgroundColor: 'rgba(75, 192, 192, 0.6)' },
          { data: budgets.map(b => b.totalExpenses), label: 'Gastos', backgroundColor: 'rgba(255, 99, 132, 0.6)' },
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
