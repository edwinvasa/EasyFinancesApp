import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';  // Para generar el userId
import { LoanAnalysisResponse } from '../interfaces/loan-analysis.interface';

@Injectable({
  providedIn: 'root'
})
export class LoanAnalysisService {
  private readonly apiUrl = 'https://easy-finances-app-63cef07822fc.herokuapp.com/api/loan-analysis';

  constructor(private readonly http: HttpClient) { }

  public analyzeLoan(formValues: any): Observable<LoanAnalysisResponse> {
    const userId = uuidv4();

    // Convertir el monto y el valor del abono (si existe) a formato numérico
    const valorAbonoNumerico = formValues.abonosCapital === 'si'
      ? formValues.valorAbono
      : null;

    // Construir el payload para el request al backend
    const payload = {
      userId: userId,
      principal: formValues.monto,
      rateTypeId: formValues.tipoTasa === 'TEA' ? 1 : 2,
      rate: formValues.tasa,
      term: formValues.plazo,
      termType: formValues.tipoPlazo === 'Meses' ? 'months' : 'years',
      capitalRepayment: formValues.abonosCapital === 'si',
      capitalRepaymentAmount: valorAbonoNumerico,
      capitalRepaymentFrequency: formValues.frecuenciaAbono || null,
      startCapitalRepaymentInstallment: formValues.cuotaInicio || null
    };

    return this.http.post<any>(this.apiUrl, payload);
  }
}
