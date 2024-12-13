import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';
import { BaseService } from '../../shared/services/base.service';

export interface PaymentMethod {
  paymentMethodId: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService extends BaseService {
  private readonly apiUrl = 'https://easy-finances-app-63cef07822fc.herokuapp.com/api/queries/payment-methods';

  constructor(http: HttpClient, authService: AuthService) {
    super(http, authService);
  }

  getPaymentMethods(): Observable<PaymentMethod[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<PaymentMethod[]>(this.apiUrl, { headers });
  }
}
