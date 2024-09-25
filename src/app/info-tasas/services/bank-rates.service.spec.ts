import { TestBed } from '@angular/core/testing';

import { BankRatesService } from './bank-rates.service';

describe('BankRatesService', () => {
  let service: BankRatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankRatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
