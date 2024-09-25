import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { ExpenseTypeService } from '../../services/expense-type.service';
import { ExpenseType } from '../../interfaces/expense-type.interface';

@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.component.html',
  styleUrls: ['./add-expenses.component.css']
})
export class AddExpensesComponent implements OnInit {
  @Output() onExpenseAdded = new EventEmitter<{ expenseTypeId: number, expenseTypeNameAndCategory: string, amount: number }>();

  expenseTypes: ExpenseType[] = [];
  selectedExpenseTypeId: number | null = null;
  amount: number | null = null;

  constructor(private expenseTypeService: ExpenseTypeService) {}

  ngOnInit(): void {
    this.loadExpenseTypes();
  }

  loadExpenseTypes() {
    this.expenseTypeService.getExpenseTypes().subscribe({
      next: (types) => {
        this.expenseTypes = types;
        console.log('Tipos de gastos cargados:', this.expenseTypes); // Verificar que los tipos de gastos se han cargado correctamente
      },
      error: (err) => {
        console.error('Error al cargar tipos de gastos:', err);
      }
    });
  }

  addExpense() {
    console.log('ID seleccionado:', this.selectedExpenseTypeId); // Verificar qué valor tiene selectedExpenseTypeId
    console.log('Monto ingresado:', this.amount); // Verificar el valor del monto

    // Validar que se haya seleccionado un tipo de gasto y un monto válido
    if (this.selectedExpenseTypeId === null) {
      console.error('Debe seleccionar un tipo de gasto');
      return;
    }
    if (this.amount === null || this.amount <= 0) {
      console.error('Debe ingresar un monto válido');
      return;
    }

    // Convertir el selectedExpenseTypeId a número
    const selectedExpenseTypeIdNum = Number(this.selectedExpenseTypeId);

    // Buscar el tipo de gasto seleccionado
    const selectedExpenseType = this.expenseTypes.find(type => type.id === selectedExpenseTypeIdNum);
    console.log('Tipo de gasto seleccionado:', selectedExpenseType); // Verificar qué tipo de gasto se ha encontrado

    if (selectedExpenseType) {
      // Emitir el evento con el nombre y categoría concatenados
      this.onExpenseAdded.emit({
        expenseTypeId: selectedExpenseType.id,
        expenseTypeNameAndCategory: `${selectedExpenseType.name} - ${selectedExpenseType.category}`,
        amount: this.amount
      });
      this.resetForm();
    } else {
      console.error('Error al encontrar el tipo de gasto seleccionado');
    }
  }

  resetForm() {
    this.selectedExpenseTypeId = null;
    this.amount = null;
  }
}
