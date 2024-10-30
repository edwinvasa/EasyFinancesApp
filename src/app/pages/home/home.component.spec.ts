import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // Ignorar elementos desconocidos como el carrusel de Bootstrap
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detección de cambios inicial
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the welcome title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Bienvenido a EasyFinances');
  });

  it('should render the purpose section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.purpose-section h3')?.textContent).toContain('¿Qué Puedes Hacer con EasyFinances?');
  });

  it('should render the carousel indicators', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.carousel-indicators button').length).toBeGreaterThan(0);
  });

  it('should render the quick tips section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#novedades-consejos h2')?.textContent).toContain('Novedades y Consejos Rápidos');
  });
});
