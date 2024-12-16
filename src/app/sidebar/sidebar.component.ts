import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private authSubscription: Subscription = new Subscription();

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authSubscription = this.authService.isAuthenticated$.subscribe(
      (status) => (this.isAuthenticated = status)
    );
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  closeMenu(): void {
    const offcanvasElement = document.getElementById('offcanvasNavbar');
    if (offcanvasElement) {
      const bootstrapOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
      if (bootstrapOffcanvas) {
        bootstrapOffcanvas.hide();
      }
    }

    // Eliminar cualquier capa oscura residual
    const backdrop = document.querySelector('.offcanvas-backdrop');
    if (backdrop) {
      backdrop.remove();
    }

    // Restaurar el scroll eliminando las clases residuales
    document.body.classList.remove('offcanvas-open', 'overflow-hidden');
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '';
  }
}
