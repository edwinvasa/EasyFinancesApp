import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Budget } from '../../interfaces/budget.interface';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-budget-plan-vs-executed',
  templateUrl: './budget-plan-vs-executed.component.html',
  styleUrls: ['./budget-plan-vs-executed.component.css']
})
export class BudgetPlanVsExecutedComponent implements OnChanges {
  @Input() budget!: Budget; // Recibe el presupuesto más reciente

  // Variables para las gráficas
  chartData: any = {
    labels: [] as string[],
    datasets: [] as { data: number[]; label: string; backgroundColor: string }[]
  };
  chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw.toLocaleString('es-CO', {
              style: 'currency',
              currency: 'COP',
            })}`;
          }
        }
      },
      legend: {
        position: 'top' as const
      }
    },
    scales: {
      x: {
        stacked: false
      },
      y: {
        stacked: false
      }
    }
  };

  chartType: ChartType = 'bar'; // Tipo de gráfica
  isLoading: boolean = true; // Maneja el estado de carga

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['budget'] && this.budget) {
      this.isLoading = true; // Inicia el estado de carga
      this.updateChartData();
    }
  }

  updateChartData(): void {
    setTimeout(() => {
      this.chartData = {
        labels: ['Presupuesto'],
        datasets: [
          {
            data: [this.budget.totalExpenses], // Planeado
            label: 'Planeado',
            backgroundColor: 'rgba(75, 192, 192, 0.8)' // Color verde
          },
          {
            data: [this.budget.executed], // Ejecutado
            label: 'Ejecutado',
            backgroundColor: 'rgba(255, 99, 132, 0.8)' // Color rojo
          }
        ]
      };
      this.isLoading = false; // Finaliza el estado de carga
    }, 500); // Retraso simulado de 500 ms
  }
}
