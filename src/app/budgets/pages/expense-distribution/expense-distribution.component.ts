import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartOptions, ChartType, ChartData } from 'chart.js';
import { Expense } from '../../interfaces/expense.interface';

@Component({
  selector: 'app-expense-distribution',
  templateUrl: './expense-distribution.component.html',
  styleUrls: ['./expense-distribution.component.css']
})
export class ExpenseDistributionComponent implements OnInit, OnChanges {
  @Input() expenses: Expense[] = [];
  chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  chartType: ChartType = 'pie';
  chartData: ChartData<'pie'> = {
    labels: [],
    datasets: [],
  };

  isLoading: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.processData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['expenses'] && changes['expenses'].currentValue) {
      this.isLoading = true;
      this.processData();
    }
  }

  processData(): void {
    console.log('Expenses:', this.expenses);
    if (!this.expenses || this.expenses.length === 0) {
      console.warn('No hay datos para procesar en expenses');
      this.isLoading = false;
      return;
    }

    if (this.expenses.length > 0) {
      this.chartData.labels = this.expenses.map(e => e.customName);
      this.chartData.datasets = [
        {
          data: this.expenses.map(e => e.budgetedAmount),
          backgroundColor: this.generateColors(this.expenses.length),
        },
      ];
    } else {
      console.error('No se recibieron datos del servidor.');
    }
    this.isLoading = false;
  }

  // Generar colores dinámicos para la gráfica
  private generateColors(count: number): string[] {
    const colors: string[] = [];
    for (let i = 0; i < count; i++) {
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      colors.push(`rgba(${r}, ${g}, ${b}, 0.6)`);
    }
    return colors;
  }
}
