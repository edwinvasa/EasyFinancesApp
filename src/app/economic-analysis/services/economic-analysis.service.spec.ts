import { TestBed } from '@angular/core/testing';

import { EconomicAnalysisService } from './economic-analysis.service';

describe('EconomicAnalysisService', () => {
  let service: EconomicAnalysisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EconomicAnalysisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
