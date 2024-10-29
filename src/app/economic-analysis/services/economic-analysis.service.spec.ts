import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EconomicAnalysisService } from './economic-analysis.service';
import { EconomicAnalysisRequest, EconomicAnalysisResponse } from '../interfaces/economic-analysis.interface';

fdescribe('EconomicAnalysisService', () => {
  let service: EconomicAnalysisService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EconomicAnalysisService]
    });
    service = TestBed.inject(EconomicAnalysisService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should post economic analysis request and receive a response', () => {
    const requestData: EconomicAnalysisRequest = {
      userId: 'mock-user-id',
      monthlyIncome: 5000,
      additionalIncome: 500,
      expenses: [{ expenseTypeId: 1, amount: 1000 }],
      receivesChristmasBonus: true,
      receivesMidYearBonus: false,
      christmasBonusAmount: 500,
      midYearBonusAmount: 0
    };

    const mockResponse: EconomicAnalysisResponse = {
      id: 'mock-id',
      userId: 'mock-user-id',
      monthlyIncome: 5000,
      additionalIncome: 500,
      totalExpenses: 700,
      suggestedPaymentAmount: 1000,
      christmasBonusAmount: 500,
      midYearBonusAmount: 0
    };

    service.analyzeEconomicCapacity(requestData).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('https://easy-finances-app-63cef07822fc.herokuapp.com/api/economic-analysis');
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });
});
