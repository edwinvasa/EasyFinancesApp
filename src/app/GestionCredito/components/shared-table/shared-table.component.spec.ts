import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedTableComponent } from './shared-table.component';
import { Installment } from '../../interfaces/loan-analysis.interface';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CustomCurrencyPipe } from '../../../utils/pipes/custom-currency.pipe';

describe('SharedTableComponent', () => {
  let component: SharedTableComponent;
  let fixture: ComponentFixture<SharedTableComponent>;

  const mockData: Installment[] = [
    {
      installmentNumber: 1,
      principalOwed: 1000000,
      principalPaid: 50000,
      interestPaid: 10000,
      totalPayment: 60000,
      remainingBalance: 950000,
      amortizationType: 'Fixed'
    },
    {
      installmentNumber: 2,
      principalOwed: 950000,
      principalPaid: 50000,
      interestPaid: 9000,
      totalPayment: 59000,
      remainingBalance: 900000,
      amortizationType: 'Fixed'
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SharedTableComponent, CustomCurrencyPipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA] 
    }).compileComponents();

    fixture = TestBed.createComponent(SharedTableComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct title', () => {
    const testTitle = 'Tabla de Cuotas';
    component.title = testTitle;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.table-title')?.textContent).toContain(testTitle);
  });

  it('should display the correct number of rows', () => {
    component.data = mockData;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const rows = compiled.querySelectorAll('tbody tr');
    expect(rows.length).toBe(mockData.length);
  });
  
});
