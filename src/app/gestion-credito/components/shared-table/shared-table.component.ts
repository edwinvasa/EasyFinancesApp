import { Component, Input } from '@angular/core';
import { Installment } from '../../interfaces/loan-analysis.interface';

@Component({
  selector: 'app-shared-table',
  templateUrl: './shared-table.component.html',
  styleUrl: './shared-table.component.css'
})
export class SharedTableComponent {
  @Input()
  data: Installment[] = [];

  @Input()
  title: string = '';

  constructor() {}
}
