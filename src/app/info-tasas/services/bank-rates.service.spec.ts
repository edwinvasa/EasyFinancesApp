import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BankRatesService } from './bank-rates.service';
import { BankRate } from '../interfaces/bank-rate.interface';

describe('BankRatesService', () => {
  let service: BankRatesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BankRatesService]
    });
    service = TestBed.inject(BankRatesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch bank interest rates', () => {
    const mockRates: BankRate[] = [
      { id: '1', bankName: 'Banco A', interestRate: 12.5, maxInterestRate: 14, effectiveDate: '2024-01-01' },
      { id: '2', bankName: 'Banco B', interestRate: 9.5, maxInterestRate: 10, effectiveDate: '2024-02-01' }
    ];

    service.getBankRates().subscribe((rates) => {
      expect(rates).toEqual(mockRates);
    });

    const req = httpMock.expectOne(service['apiUrl']);
    expect(req.request.method).toBe('GET');
    req.flush(mockRates);
  });

  it('should subscribe to notifications', () => {
    const userId = 'test-user-id';
    const email = 'test@example.com';
    const mockResponse = { success: true, message: 'Subscribed successfully' };

    service.subscribeToNotifications(userId, email).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(service['subscribeUrl']);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ userId, email });
    req.flush(mockResponse);
  });

  it('should unsubscribe from notifications', () => {
    const email = 'test@example.com';
    const mockResponse = { success: true, message: 'Unsubscribed successfully' };

    service.unsubscribeFromNotifications(email).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(service['unsubscribeUrl']);
    expect(req.request.method).toBe('DELETE');
    expect(req.request.body).toEqual({ email });
    req.flush(mockResponse);
  });
});
