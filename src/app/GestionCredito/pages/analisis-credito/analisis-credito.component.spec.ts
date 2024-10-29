import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnalisisCreditoComponent } from './analisis-credito.component';
import { LoanAnalysis, LoanAnalysisResponse, Suggestion } from '../../interfaces/loan-analysis.interface';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CustomCurrencyPipe } from '../../../utils/pipes/custom-currency.pipe';

fdescribe('AnalisisCreditoComponent', () => {
  let component: AnalisisCreditoComponent;
  let fixture: ComponentFixture<AnalisisCreditoComponent>;

  const mockLoanAnalysis: LoanAnalysis = {
    totalInterestWithoutRepayment: 50000,
    monthsWithoutRepayment: 24,
    totalInterestWithRepayment: 30000,
    interestSaved: 20000,
    monthsWithRepayment: 18,
    monthsSaved: 6
  };

  const mockLoanAnalysisResponse: LoanAnalysisResponse = {
    withoutCapitalRepayment: [
      { installmentNumber: 1, principalOwed: 1000, principalPaid: 100, interestPaid: 10, totalPayment: 110, remainingBalance: 900, amortizationType: 'Fixed' }
    ],
    withCapitalRepayment: [
      { installmentNumber: 1, principalOwed: 1000, principalPaid: 150, interestPaid: 5, totalPayment: 155, remainingBalance: 850, amortizationType: 'Fixed' }
    ],
    analysis: mockLoanAnalysis,
    suggestion: {
      bankName: 'Banco A',
      suggestedBankRate: 5.0,
      bankMaxRate: 7.0,
      currentRate: 6.5,
      message: 'Considera refinanciar tu crédito.'
    }
  };

  const mockSuggestion: Suggestion = {
    bankName: 'Banco A',
    suggestedBankRate: 5.0,
    bankMaxRate: 7.0,
    currentRate: 6.5,
    message: 'Considera refinanciar tu crédito.'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnalisisCreditoComponent, CustomCurrencyPipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(AnalisisCreditoComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle undefined "withCapitalRepayment" safely', () => {
    component.loanAnalysisResponse = { ...mockLoanAnalysisResponse, withCapitalRepayment: undefined };
    component.analysis = mockLoanAnalysis;
    fixture.detectChanges();

    expect(() => fixture.detectChanges()).not.toThrow();
  });

  it('should display loan analysis details correctly', () => {
    component.loanAnalysisResponse = mockLoanAnalysisResponse;
    component.analysis = mockLoanAnalysis;
    fixture.detectChanges();
  
    const compiled = fixture.nativeElement as HTMLElement;
  
    // Verificar los intereses totales sin abonos a capital
    const totalInterestElement = compiled.querySelector('.card-text')?.textContent;
    expect(totalInterestElement?.replace(/\s+/g, '')).toContain('Interesestotalessinabonosacapital:$50.000');
  
    // Verificar los meses sin abonos a capital
    const monthsElement = compiled.querySelectorAll('.card-text')[1]?.textContent;
    expect(monthsElement).toContain('Pagarías el crédito en: 24 Meses');
  });  

  it('should display suggestion if present', () => {
    component.loanAnalysisResponse = mockLoanAnalysisResponse;
    component.suggestion = mockSuggestion;
    fixture.detectChanges();

    const suggestionElement = fixture.debugElement.query(By.css('.alert-info'));
    expect(suggestionElement).toBeTruthy();
    expect(suggestionElement.nativeElement.textContent).toContain('5%');
  });

  it('should toggle amortization tables visibility', () => {
    component.showAmortizationTables = false;
    component.toggleAmortizationTables();
    expect(component.showAmortizationTables).toBeTrue();

    component.toggleAmortizationTables();
    expect(component.showAmortizationTables).toBeFalse();
  });

  it('should display amortization tables when button is clicked', () => {
    component.loanAnalysisResponse = mockLoanAnalysisResponse;
    fixture.detectChanges();

    const toggleButton = fixture.debugElement.query(By.css('.btn-primary'));
    toggleButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.showAmortizationTables).toBeTrue();
    const amortizationTable = fixture.debugElement.query(By.css('app-tabla-amortizacion'));
    expect(amortizationTable).toBeTruthy();
  });
});
