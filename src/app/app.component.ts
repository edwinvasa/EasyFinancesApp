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

    if (offcanvasElement) {
      offcanvasElement.addEventListener('hidden.bs.offcanvas', () => {
        this.cleanBodyScroll();
        this.removeBackdrop();
      });
    }

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.cleanBodyScroll();
        this.removeBackdrop();
      }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        this.cleanBodyScroll();
        this.removeBackdrop();
      });
    });

    this.renderer.listen('window', 'load', () => {
      this.cleanBodyScroll();
      this.removeBackdrop();
    });

  }

  cleanBodyScroll(): void {
    document.body.classList.remove('offcanvas-open', 'overflow-hidden');
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '';
  }

  private removeBackdrop(): void {
    const backdrop = document.querySelector('.offcanvas-backdrop');
    if (backdrop) {
      backdrop.remove();
    }
  }
}
