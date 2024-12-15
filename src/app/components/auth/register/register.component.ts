import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username = '';
  password = '';
  successMessage = '';
  errorMessage = '';
  isLoading = false; // Estado de carga

  constructor(private authService: AuthService, private router: Router) {}

  register(): void {
    if (this.isLoading) return; // Evitar múltiples clics
    this.isLoading = true; // Activar estado de carga
    this.successMessage = '';
    this.errorMessage = '';

    this.authService.register(this.username, this.password).subscribe({
      next: (response) => {
        this.successMessage = response.message;
        this.username = '';
        this.password = '';
      },
      error: (error) => {
        if (error.status === 409 && error.error?.message) {
          this.errorMessage = error.error.message; // Mostrar mensaje específico del servidor
        } else {
          this.errorMessage = 'Hubo un error en el registro. Inténtalo de nuevo.';
        }
        this.isLoading = false;
      },
      complete: () => (this.isLoading = false) // Desactivar estado de carga
    });
  }
}
