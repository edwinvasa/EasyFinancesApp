import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeExpenseTrendsComponent } from './income-expense-trends.component';

describe('IncomeExpenseTrendsComponent', () => {
  let component: IncomeExpenseTrendsComponent;
  let fixture: ComponentFixture<IncomeExpenseTrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncomeExpenseTrendsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomeExpenseTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
