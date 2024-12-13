import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetsService } from '../../services/budgets.service';
import { Budget } from '../../interfaces/budget.interface';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-clone-budget',
  templateUrl: './clone-budget.component.html',
  styleUrls: ['./clone-budget.component.css']
})
export class CloneBudgetComponent implements OnInit {
  @Input() budgetToClone: Budget | null = null;
  @Output() closeModal = new EventEmitter<void>();

  cloneData = {
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
    description: '',
    cloneIncomeDetails: true,
  };

  userId: string | null = '';

  constructor(
    private budgetsService: BudgetsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userId = this.authService.getUserIdFromToken();
    if (!this.userId) {
      console.error('No se pudo obtener el usuario del token.', 'Error');
    }
  }

  cloneBudget(): void {
    const cloneRequest = {
      budgetId: this.budgetToClone?.budgetId,
      userId: this.userId,
      ...this.cloneData
    };

    this.budgetsService.cloneBudget(cloneRequest).subscribe({
      next: () => {
        alert('Presupuesto clonado con éxito');
        this.closeModal.emit();
      },
      error: (err) => {
        console.error('Error al clonar el presupuesto', err);
        alert('Ocurrió un error al clonar el presupuesto');
      }
    });
  }

  cancel(): void {
    this.closeModal.emit();
  }
}
