import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloneBudgetComponent } from './clone-budget.component';

describe('CloneBudgetComponent', () => {
  let component: CloneBudgetComponent;
  let fixture: ComponentFixture<CloneBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CloneBudgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloneBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
