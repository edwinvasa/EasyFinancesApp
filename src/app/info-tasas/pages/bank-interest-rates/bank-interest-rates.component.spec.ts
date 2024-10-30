import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BankInterestRatesComponent } from './bank-interest-rates.component';
import { BankRatesService } from '../../services/bank-rates.service';
import { BankRate } from '../../interfaces/bank-rate.interface';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('BankInterestRatesComponent', () => {
  let component: BankInterestRatesComponent;
  let fixture: ComponentFixture<BankInterestRatesComponent>;
  let bankRatesService: jasmine.SpyObj<BankRatesService>;

  beforeEach(async () => {
    const bankRatesSpy = jasmine.createSpyObj('BankRatesService', ['getBankRates']);

    await TestBed.configureTestingModule({
      declarations: [BankInterestRatesComponent],
      providers: [
        { provide: BankRatesService, useValue: bankRatesSpy }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // Suprimir el error del elemento desconocido
    }).compileComponents();

    fixture = TestBed.createComponent(BankInterestRatesComponent);
    component = fixture.componentInstance;
    bankRatesService = TestBed.inject(BankRatesService) as jasmine.SpyObj<BankRatesService>;
  });

  it('should fetch and display bank interest rates', () => {
    const mockRates: BankRate[] = [
      { bankName: 'Banco A', interestRate: 12.5, maxInterestRate: 14, effectiveDate: '2024-01-01', id: '1' },
      { bankName: 'Banco B', interestRate: 9.5, maxInterestRate: 10, effectiveDate: '2024-02-01', id: '2' },
      { bankName: 'Banco C', interestRate: 15, maxInterestRate: 16, effectiveDate: '2024-03-01', id: '3' }
    ];

    bankRatesService.getBankRates.and.returnValue(of(mockRates));
    component.ngOnInit();
    fixture.detectChanges();

    expect(component.bankRates).toEqual([
      { bankName: 'Banco B', interestRate: 9.5, maxInterestRate: 10, effectiveDate: '2024-02-01', id: '2' },
      { bankName: 'Banco A', interestRate: 12.5, maxInterestRate: 14, effectiveDate: '2024-01-01', id: '1' },
      { bankName: 'Banco C', interestRate: 15, maxInterestRate: 16, effectiveDate: '2024-03-01', id: '3' }
    ]);
  });
});
