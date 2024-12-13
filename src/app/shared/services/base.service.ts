import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

export abstract class BaseService {
  constructor(protected http: HttpClient, protected authService: AuthService) {}

  protected getAuthHeaders(): HttpHeaders {
    if (!this.authService.isLoggedIn()) {
      throw new Error('No se encontró un token. El usuario no está autenticado.');
    }
    const token = this.authService.getToken();

    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
  }
}
