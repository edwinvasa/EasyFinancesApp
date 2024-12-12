import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetPlanVsExecutedComponent } from './budget-plan-vs-executed.component';

describe('BudgetPlanVsExecutedComponent', () => {
  let component: BudgetPlanVsExecutedComponent;
  let fixture: ComponentFixture<BudgetPlanVsExecutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BudgetPlanVsExecutedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetPlanVsExecutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
