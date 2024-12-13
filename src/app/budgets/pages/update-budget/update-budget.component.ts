import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetsService } from '../../services/budgets.service';
import { Budget } from '../../interfaces/budget.interface';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-update-budget',
  templateUrl: './update-budget.component.html',
  styleUrls: ['./update-budget.component.css']
})
export class UpdateBudgetComponent implements OnInit {
  @Input() budgetToEdit: Budget | null = null;
  @Output() closeModal = new EventEmitter<void>();

  budgetData: Partial<Budget> = {
    description: '',
    month: 1,
    year: new Date().getFullYear()
  };
  userId: string | null = '';

  constructor(
    private budgetsService: BudgetsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userId = this.authService.getUserIdFromToken();
    if (!this.userId || !this.budgetToEdit) {
      console.error('No se pudo obtener el usuario del token.', 'Error');
    } else {
      this.budgetData = {
        description: this.budgetToEdit.description,
        month: this.budgetToEdit.month,
        year: this.budgetToEdit.year
      };
    }
  }

  updateBudget(): void {
    if (!this.userId || !this.budgetToEdit?.budgetId) return;

    const updateRequest = {
      ...this.budgetData
    };

    this.budgetsService.updateBudget(this.userId, this.budgetToEdit.budgetId, updateRequest).subscribe({
      next: () => {
        alert('Presupuesto actualizado con éxito');
        this.closeModal.emit();
      },
      error: (err) => {
        console.error('Error al actualizar el presupuesto', err);
        alert('Ocurrió un error al actualizar el presupuesto');
      }
    });
  }

  cancel(): void {
    this.closeModal.emit();
  }
}
