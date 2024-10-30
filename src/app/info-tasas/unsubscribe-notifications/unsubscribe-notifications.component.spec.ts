import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnsubscribeNotificationsComponent } from './unsubscribe-notifications.component';
import { BankRatesService } from '../services/bank-rates.service';
import { of, throwError } from 'rxjs';
import { FormsModule, NgForm } from '@angular/forms';

describe('UnsubscribeNotificationsComponent', () => {
  let component: UnsubscribeNotificationsComponent;
  let fixture: ComponentFixture<UnsubscribeNotificationsComponent>;
  let bankRatesServiceSpy: jasmine.SpyObj<BankRatesService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('BankRatesService', ['unsubscribeFromNotifications']);

    await TestBed.configureTestingModule({
      declarations: [UnsubscribeNotificationsComponent],
      imports: [FormsModule], // Importar FormsModule
      providers: [{ provide: BankRatesService, useValue: spy }]
    }).compileComponents();

    fixture = TestBed.createComponent(UnsubscribeNotificationsComponent);
    component = fixture.componentInstance;
    bankRatesServiceSpy = TestBed.inject(BankRatesService) as jasmine.SpyObj<BankRatesService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should successfully unsubscribe from notifications', () => {
    // Simular respuesta exitosa del servicio
    bankRatesServiceSpy.unsubscribeFromNotifications.and.returnValue(of({}));

    // Mock del formulario
    const mockForm = { resetForm: jasmine.createSpy('resetForm') } as unknown as NgForm;

    // Establecer un correo electrónico de prueba
    component.email = 'test@example.com';

    // Llamar al método de cancelar suscripción
    component.unsubscribe(mockForm);

    // Verificar que el servicio haya sido llamado con el correo electrónico correcto
    expect(bankRatesServiceSpy.unsubscribeFromNotifications).toHaveBeenCalledWith('test@example.com');

    // Verificar el mensaje de éxito y el reseteo del formulario
    expect(component.unsubscribeMessage).toBe('Has cancelado tu suscripción a las notificaciones.');
    expect(component.showMessage).toBeTrue();
    expect(mockForm.resetForm).toHaveBeenCalled();
  });

  it('should handle error when unsubscribe fails', () => {
    // Simular un error en el servicio
    bankRatesServiceSpy.unsubscribeFromNotifications.and.returnValue(throwError(() => new Error('Error al cancelar la suscripción')));

    // Mock del formulario
    const mockForm = { resetForm: jasmine.createSpy('resetForm') } as unknown as NgForm;

    // Establecer un correo electrónico de prueba
    component.email = 'test@example.com';

    // Llamar al método de cancelar suscripción
    component.unsubscribe(mockForm);

    // Verificar que el servicio haya sido llamado con el correo electrónico correcto
    expect(bankRatesServiceSpy.unsubscribeFromNotifications).toHaveBeenCalledWith('test@example.com');

    // Verificar el mensaje de error
    expect(component.unsubscribeMessage).toBe('Hubo un problema al cancelar la suscripción, intenta nuevamente.');
    expect(component.showMessage).toBeTrue();
  });
});
