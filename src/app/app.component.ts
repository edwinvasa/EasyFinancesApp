import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'EasyFinances';

  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit(): void {
    const offcanvasElement = document.getElementById('offcanvasNavbar');

    // Limpia el estado del body al cerrar el menú
    if (offcanvasElement) {
      offcanvasElement.addEventListener('hidden.bs.offcanvas', () => {
        this.cleanBodyScroll();
      });
    }

    // Garantizar scroll después de cada navegación
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.cleanBodyScroll();
      }
    });

    // Forzar limpieza al hacer clic en cualquier enlace del menú
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        setTimeout(() => this.cleanBodyScroll(), 0);
      });
    });

    // Garantizar que el scroll funcione siempre
    this.renderer.listen('window', 'load', () => {
      this.cleanBodyScroll();
    });
  }

  // Limpia las clases y estilos del body que bloquean el scroll
  private cleanBodyScroll(): void {
    this.renderer.removeClass(document.body, 'offcanvas-open');
    this.renderer.removeClass(document.body, 'overflow-hidden');
    this.renderer.setStyle(document.body, 'overflow', 'auto');
    this.renderer.setStyle(document.body, 'padding-right', '');
  }
}
