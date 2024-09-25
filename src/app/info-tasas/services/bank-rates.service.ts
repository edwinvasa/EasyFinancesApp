import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BankRate } from '../interfaces/bank-rate.interface';

@Injectable({
  providedIn: 'root'
})
export class BankRatesService {
  private apiUrl = 'http://localhost:8080/api/bank-interest-rates';
  private subscribeUrl = 'http://localhost:8080/api/notifications/subscribe';
   private unsubscribeUrl = 'http://localhost:8080/api/notifications/unsubscribe';

  constructor(private http: HttpClient) { }

  // Obtener las tasas de interés
  public getBankRates(): Observable<BankRate[]> {
    return this.http.get<BankRate[]>(this.apiUrl);
  }

  // Suscribirse a notificaciones
  public subscribeToNotifications(userId: string, email: string): Observable<any> {
    const payload = { userId, email };
    return this.http.post<any>(this.subscribeUrl, payload);
  }

  // Des-suscribirse de notificaciones
  public unsubscribeFromNotifications(email: string): Observable<any> {
    const payload = { email };
    return this.http.delete<void>(this.unsubscribeUrl, { body: payload });
  }
}
