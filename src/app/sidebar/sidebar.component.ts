import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isAuthenticated = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isLoggedIn(); // Verifica si hay una sesión activa
  }

  logout(): void {
    this.authService.logout(); // Cierra la sesión eliminando el token
    this.isAuthenticated = false;
    this.router.navigate(['/login']); // Redirige al login
  }
}
