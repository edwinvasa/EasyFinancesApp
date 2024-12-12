import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ChartOptions, ChartType, ChartData } from 'chart.js';
import { Expense } from '../../interfaces/expense.interface';

@Component({
  selector: 'app-payment-status',
  templateUrl: './payment-status.component.html',
  styleUrls: ['./payment-status.component.css']
})
export class PaymentStatusComponent implements OnInit {
  @Input() expenses: Expense[] = [];

  chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: { stacked: true },
      y: { stacked: true },
    },
  };

  chartType: ChartType = 'bar';
  chartData: ChartData<'bar'> = {
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
          data: this.expenses.map(e => e.amountPaid),
          label: 'Pagado',
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
        },
        {
          data: this.expenses.map(e => e.pendingPayment),
          label: 'Pendiente',
          backgroundColor: 'rgba(255, 99, 132, 0.6)',
        },
      ];
    } else {
      console.error('No se recibieron datos del servidor.');
    }
    this.isLoading = false;
  }

}
