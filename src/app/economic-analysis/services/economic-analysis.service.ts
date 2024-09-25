// services/economic-analysis.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EconomicAnalysisRequest, EconomicAnalysisResponse } from '../interfaces/economic-analysis.interface';

@Injectable({
  providedIn: 'root'
})
export class EconomicAnalysisService {
  private apiUrl = 'http://localhost:8080/api/economic-analysis';

  constructor(private http: HttpClient) {}

  analyzeEconomicCapacity(data: EconomicAnalysisRequest): Observable<EconomicAnalysisResponse> {
    return this.http.post<EconomicAnalysisResponse>(this.apiUrl, data);
  }
}
