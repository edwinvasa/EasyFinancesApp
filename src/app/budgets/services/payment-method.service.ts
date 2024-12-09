import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PaymentMethod {
  paymentMethodId: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {
  private readonly apiUrl = 'http://localhost:8080/api/queries/payment-methods';

  constructor(private readonly http: HttpClient) {}

  getPaymentMethods(): Observable<PaymentMethod[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic YWRtaW46cGFzc3dvcmQ='
    });

    return this.http.get<PaymentMethod[]>(this.apiUrl, { headers });
  }
}
