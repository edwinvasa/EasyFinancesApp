import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonBudgetedExpensesComponent } from './non-budgeted-expenses.component';

describe('NonBudgetedExpensesComponent', () => {
  let component: NonBudgetedExpensesComponent;
  let fixture: ComponentFixture<NonBudgetedExpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NonBudgetedExpensesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonBudgetedExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
