import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDailyExpenseComponent } from './update-daily-expense.component';

describe('UpdateDailyExpenseComponent', () => {
  let component: UpdateDailyExpenseComponent;
  let fixture: ComponentFixture<UpdateDailyExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateDailyExpenseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDailyExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
