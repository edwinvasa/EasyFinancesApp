import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TablaAmortizacionComponent } from './tabla-amortizacion.component';
import { LoanAnalysisResponse } from '../../interfaces/loan-analysis.interface';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

fdescribe('TablaAmortizacionComponent', () => {
  let component: TablaAmortizacionComponent;
  let fixture: ComponentFixture<TablaAmortizacionComponent>;

  const mockLoanAnalysisResponse: LoanAnalysisResponse = {
    withoutCapitalRepayment: [
      { installmentNumber: 1, principalOwed: 1000, principalPaid: 100, interestPaid: 10, totalPayment: 110, remainingBalance: 900, amortizationType: 'Fixed' }
    ],
    withCapitalRepayment: [
      { installmentNumber: 1, principalOwed: 1000, principalPaid: 150, interestPaid: 5, totalPayment: 155, remainingBalance: 850, amortizationType: 'Fixed' }
    ],
    analysis: {
      totalInterestWithoutRepayment: 50000,
      monthsWithoutRepayment: 24,
      totalInterestWithRepayment: 30000,
      interestSaved: 20000,
      monthsWithRepayment: 18,
      monthsSaved: 6
    },
    suggestion: null
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaAmortizacionComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(TablaAmortizacionComponent);
    component = fixture.componentInstance;
    component.loanAnalysisResponse = mockLoanAnalysisResponse; // Asignar la respuesta de análisis simulada aquí
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the table for amortization without capital repayment', () => {
    // Verificar que la tabla se muestra correctamente
    const tableElement = fixture.debugElement.query(By.css('app-shared-table[title="Amortización sin Abonos a Capital"]'));
    expect(tableElement).not.toBeNull(); // Asegurarse de que la tabla se muestra
  });

  it('should display the table for amortization with capital repayment', () => {
    // Verificar que la tabla de abonos a capital también se muestra
    const tableElement = fixture.debugElement.query(By.css('app-shared-table[title="Amortización con Abonos a Capital"]'));
    expect(tableElement).not.toBeNull(); // Asegurarse de que la tabla se muestra
  });

});
