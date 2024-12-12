import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartOptions, ChartType, ChartData } from 'chart.js';
import { DailyExpense } from '../../interfaces/daily-expense.interface';

@Component({
  selector: 'app-daily-expense-trends',
  templateUrl: './daily-expense-trends.component.html',
  styleUrls: ['./daily-expense-trends.component.css']
})
export class DailyExpenseTrendsComponent implements OnInit, OnChanges {
  @Input() dailyExpenses: DailyExpense[] = [];
  isLoading: Boolean = true;

  chartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            // Filtrar los gastos del día correspondiente al punto del gráfico
            const date = tooltipItem.label!;
            const expensesForDate = this.dailyExpenses.filter(
              (expense) => expense.paymentDate === date
            );

            // Generar la lista de nombres de gastos y montos
            return expensesForDate
              .map((expense) => `${expense.customName}: ${expense.amount.toLocaleString()}`)
              .join('\n');
          },
        },
      },
    },
  };

  chartType: ChartType = 'line';
  chartData: ChartData<'line'> = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Gastos diarios',
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  ngOnInit(): void {
    this.processData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dailyExpenses'] && changes['dailyExpenses'].currentValue) {
      this.isLoading = true;
      this.processData();
    }
  }

  processData(): void {
    console.log('Daily Expenses:', this.dailyExpenses);
    if (!this.dailyExpenses || this.dailyExpenses.length === 0) {
      console.warn('No hay datos para procesar en dailyExpenses');
      this.isLoading = false;
      return;
    }

    const groupedExpenses: { [date: string]: number } = {};

    // Agrupar los montos por fecha
    this.dailyExpenses.forEach((expense) => {
      if (!groupedExpenses[expense.paymentDate]) {
        groupedExpenses[expense.paymentDate] = 0;
      }
      groupedExpenses[expense.paymentDate] += expense.amount;
    });

    console.log('Grouped Expenses:', groupedExpenses);

    // Configurar las etiquetas y datos de la gráfica
    this.chartData.labels = Object.keys(groupedExpenses);
    this.chartData.datasets[0].data = Object.values(groupedExpenses);

    console.log('Chart Data:', this.chartData);

    this.isLoading = false;
  }

}
