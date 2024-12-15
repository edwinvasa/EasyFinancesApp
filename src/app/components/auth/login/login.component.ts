import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';
  isLoading = false; // Estado de carga

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    if (this.isLoading) return; // Evitar múltiples clics
    this.isLoading = true; // Activar el estado de carga

    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        this.authService.saveToken(response.token);
        this.router.navigate(['budget']);
      },
      error: (error) => {
        this.errorMessage = 'Credenciales incorrectas. Inténtalo de nuevo.';
      },
      complete: () => (this.isLoading = false) // Desactivar estado de carga
    });
    this.isLoading = false
  }
}
