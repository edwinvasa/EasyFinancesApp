import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoanAnalysisService } from './loan-analysis.service';
import { LoanAnalysisResponse } from '../interfaces/loan-analysis.interface';

describe('LoanAnalysisService', () => {
  let service: LoanAnalysisService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoanAnalysisService]
    });
    service = TestBed.inject(LoanAnalysisService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should send loan analysis request and return response', () => {
    const mockResponse: LoanAnalysisResponse = {
      withoutCapitalRepayment: [],
      withCapitalRepayment: [],
      analysis: {
        totalInterestWithoutRepayment: 689000.0,
        monthsWithoutRepayment: 12,
        totalInterestWithRepayment: 668000.0,
        interestSaved: 21000.0,
        monthsWithRepayment: 12,
        monthsSaved: 0
      },
      suggestion: null
    };

    const formValues = {
      monto: 10000000,
      tipoTasa: 'TEA',
      tasa: 12.5,
      plazo: 72,
      tipoPlazo: 'Meses',
      abonosCapital: 'si',
      valorAbono: 100000,
      frecuenciaAbono: 'monthly',
      cuotaInicio: 1
    };

    service.analyzeLoan(formValues).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(service['apiUrl']);
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });

  it('should handle error response', () => {
    const formValues = {
      monto: 10000000,
      tipoTasa: 'TEA',
      tasa: 12.5,
      plazo: 72,
      tipoPlazo: 'Meses',
      abonosCapital: 'si',
      valorAbono: 100000,
      frecuenciaAbono: 'monthly',
      cuotaInicio: 1
    };

    service.analyzeLoan(formValues).subscribe(
      response => fail('should have failed with a 404 error'),
      error => {
        expect(error.status).toBe(404);
      }
    );

    const req = httpMock.expectOne(service['apiUrl']);
    req.flush('Not Found', { status: 404, statusText: 'Not Found' });
  });
});
