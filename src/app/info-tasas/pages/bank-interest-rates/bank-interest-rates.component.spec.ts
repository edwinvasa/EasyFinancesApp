import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankInterestRatesComponent } from './bank-interest-rates.component';

describe('BankInterestRatesComponent', () => {
  let component: BankInterestRatesComponent;
  let fixture: ComponentFixture<BankInterestRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankInterestRatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankInterestRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
