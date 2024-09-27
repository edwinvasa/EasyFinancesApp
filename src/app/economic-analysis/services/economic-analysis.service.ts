// services/economic-analysis.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EconomicAnalysisRequest, EconomicAnalysisResponse } from '../interfaces/economic-analysis.interface';

@Injectable({
  providedIn: 'root'
})
export class EconomicAnalysisService {
  private apiUrl = 'https://easy-finances-app-63cef07822fc.herokuapp.com/api/economic-analysis';

  constructor(private http: HttpClient) {}

  analyzeEconomicCapacity(data: EconomicAnalysisRequest): Observable<EconomicAnalysisResponse> {
    return this.http.post<EconomicAnalysisResponse>(this.apiUrl, data);
  }
}
