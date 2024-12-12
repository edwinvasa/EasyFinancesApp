import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetChartsComponent } from './budget-charts.component';

describe('BudgetChartsComponent', () => {
  let component: BudgetChartsComponent;
  let fixture: ComponentFixture<BudgetChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BudgetChartsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
