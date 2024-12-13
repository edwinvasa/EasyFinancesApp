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

  constructor(private authService: AuthService, private router: Router) {}

  register(): void {
    this.authService.register(this.username, this.password).subscribe({
      next: () => {
        this.successMessage = 'Usuario registrado exitosamente. Ahora puedes iniciar sesión.';
        this.username = '';
        this.password = '';
      },
      error: () => {
        this.errorMessage = 'Hubo un error en el registro. Inténtalo de nuevo.';
      }
    });
  }
}
