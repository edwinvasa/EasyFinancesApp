import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarComponent],
      imports: [RouterTestingModule] // Importar RouterTestingModule para manejar los enlaces de routerLink
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detección de cambios inicial
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a link to "Inicio"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.nav-link.fs-5')?.textContent).toContain('Inicio');
  });

  it('should have a link to "Gestión de Crédito"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a[routerLink="/credit-management"]')?.textContent).toContain('Gestión de Crédito');
  });

  it('should have a link to "Análisis Económico"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a[routerLink="/economic-analysis"]')?.textContent).toContain('Análisis Económico');
  });

  it('should have a link to "Tasas de Bancos"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a[routerLink="/info-tasas/bank-interest-rates"]')?.textContent).toContain('Tasas de Bancos');
  });

  it('should have a link to "Suscribirse a Notificaciones"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a[routerLink="/info-tasas/subscribe"]')?.textContent).toContain('Suscribirse a Notificaciones');
  });

  it('should have a link to "Darse de Baja de Notificaciones"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a[routerLink="/info-tasas/unsubscribe"]')?.textContent).toContain('Darse de Baja de Notificaciones');
  });
});
