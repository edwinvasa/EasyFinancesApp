import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyExpenseTrendsComponent } from './daily-expense-trends.component';

describe('DailyExpenseTrendsComponent', () => {
  let component: DailyExpenseTrendsComponent;
  let fixture: ComponentFixture<DailyExpenseTrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DailyExpenseTrendsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyExpenseTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
