import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BankRate } from '../interfaces/bank-rate.interface';

@Injectable({
  providedIn: 'root'
})
export class BankRatesService {
  private apiUrl = 'https://easy-finances-app-63cef07822fc.herokuapp.com/api/bank-interest-rates';
  private subscribeUrl = 'https://easy-finances-app-63cef07822fc.herokuapp.com/api/notifications/subscribe';
   private unsubscribeUrl = 'https://easy-finances-app-63cef07822fc.herokuapp.com/api/notifications/unsubscribe';

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
