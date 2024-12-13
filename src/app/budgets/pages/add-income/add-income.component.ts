import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetsService } from '../../services/budgets.service';

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.css']
})
export class AddIncomeComponent implements OnInit {
  @Input() budgetId: string | null = null;
  @Output() closeModal = new EventEmitter<void>();

  incomeData = {
    name: '',
    amount: 0
  };

  constructor(
    private budgetsService: BudgetsService,
  ) {}

  ngOnInit(): void {}

  addIncome(): void {
    if (!this.budgetId) return;

    const incomeRequest = {
      ...this.incomeData,
      budgetId: this.budgetId
    };

    this.budgetsService.addIncome(incomeRequest).subscribe({
      next: () => {
        alert('Ingreso agregado con éxito');
        this.closeModal.emit();
      },
      error: (err) => {
        console.error('Error al agregar ingreso', err);
        alert('Ocurrió un error al agregar el ingreso');
      }
    });
  }

  cancel(): void {
    this.closeModal.emit();
  }
}
