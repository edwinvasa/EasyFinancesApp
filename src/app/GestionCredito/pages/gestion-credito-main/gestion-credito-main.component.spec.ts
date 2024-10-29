import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionCreditoMainComponent } from './gestion-credito-main.component';
import { LoanAnalysisService } from '../../services/loan-analysis.service';
import { of, throwError } from 'rxjs';
import { LoanAnalysisResponse } from '../../interfaces/loan-analysis.interface';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

fdescribe('GestionCreditoMainComponent', () => {
  let component: GestionCreditoMainComponent;
  let fixture: ComponentFixture<GestionCreditoMainComponent>;
  let loanAnalysisService: jasmine.SpyObj<LoanAnalysisService>;

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
    suggestion: {
      bankName: 'Banco A',
      suggestedBankRate: 5.0,
      bankMaxRate: 7.0,
      currentRate: 6.5,
      message: 'Considera refinanciar tu crédito.'
    }
  };

  beforeEach(async () => {
    const loanAnalysisServiceSpy = jasmine.createSpyObj('LoanAnalysisService', ['analyzeLoan']);

    await TestBed.configureTestingModule({
      declarations: [GestionCreditoMainComponent],
      providers: [
        { provide: LoanAnalysisService, useValue: loanAnalysisServiceSpy }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionCreditoMainComponent);
    component = fixture.componentInstance;
    loanAnalysisService = TestBed.inject(LoanAnalysisService) as jasmine.SpyObj<LoanAnalysisService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call LoanAnalysisService and set loanAnalysisResponse on successful form submission', () => {
    // Mockear la respuesta del servicio
    loanAnalysisService.analyzeLoan.and.returnValue(of(mockLoanAnalysisResponse));

    // Simular el envío del formulario
    const formValues = { amount: 10000, term: 24 };
    component.handleCreditSubmission(formValues);

    expect(loanAnalysisService.analyzeLoan).toHaveBeenCalledOnceWith(formValues);
    expect(component.loanAnalysisResponse).toEqual(mockLoanAnalysisResponse);
  });

  it('should log an error when LoanAnalysisService fails', () => {
    // Espiar el console.error
    spyOn(console, 'error');

    // Mockear un error en el servicio
    loanAnalysisService.analyzeLoan.and.returnValue(throwError(() => new Error('Error al obtener los datos de análisis')));

    // Simular el envío del formulario
    const formValues = { amount: 10000, term: 24 };
    component.handleCreditSubmission(formValues);

    expect(loanAnalysisService.analyzeLoan).toHaveBeenCalledOnceWith(formValues);
    expect(console.error).toHaveBeenCalledWith('Error al obtener los datos de análisis', jasmine.any(Error));
  });

  it('should display the loan analysis component when loanAnalysisResponse is defined', () => {
    component.loanAnalysisResponse = mockLoanAnalysisResponse;
    fixture.detectChanges();

    // Verificar que el componente <app-analisis-credito> esté presente
    const analisisCreditoComponent = fixture.debugElement.query(By.css('app-analisis-credito'));
    expect(analisisCreditoComponent).toBeTruthy();
  });

  it('should not display the loan analysis component when loanAnalysisResponse is undefined', () => {
    component.loanAnalysisResponse = undefined;
    fixture.detectChanges();

    // Verificar que el componente <app-analisis-credito> no esté presente
    const analisisCreditoComponent = fixture.debugElement.query(By.css('app-analisis-credito'));
    expect(analisisCreditoComponent).toBeNull();
  });
});
