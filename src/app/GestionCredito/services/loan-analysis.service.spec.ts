import { TestBed } from '@angular/core/testing';

import { LoanAnalysisService } from './loan-analysis.service';

describe('LoanAnalysisService', () => {
  let service: LoanAnalysisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanAnalysisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
