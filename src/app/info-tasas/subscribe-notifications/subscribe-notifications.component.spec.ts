import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { SubscribeNotificationsComponent } from './subscribe-notifications.component';
import { BankRatesService } from '../services/bank-rates.service';

fdescribe('SubscribeNotificationsComponent', () => {
  let component: SubscribeNotificationsComponent;
  let fixture: ComponentFixture<SubscribeNotificationsComponent>;
  let bankRatesService: jasmine.SpyObj<BankRatesService>;

  beforeEach(async () => {
    const bankRatesSpy = jasmine.createSpyObj('BankRatesService', ['subscribeToNotifications']);

    await TestBed.configureTestingModule({
      declarations: [SubscribeNotificationsComponent],
      imports: [FormsModule],
      providers: [
        { provide: BankRatesService, useValue: bankRatesSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SubscribeNotificationsComponent);
    component = fixture.componentInstance;
    bankRatesService = TestBed.inject(BankRatesService) as jasmine.SpyObj<BankRatesService>;
  });

  it('should subscribe to notifications successfully', fakeAsync(() => {
    const mockForm = jasmine.createSpyObj('NgForm', ['resetForm']);
    component.email = 'test@example.com';

    bankRatesService.subscribeToNotifications.and.returnValue(of({ success: true }));

    component.subscribe(mockForm as unknown as NgForm);

    // Simular el paso del tiempo para que el mensaje de suscripción desaparezca
    tick(3000);
    fixture.detectChanges();

    expect(bankRatesService.subscribeToNotifications).toHaveBeenCalledWith(jasmine.any(String), component.email);
    expect(component.subscriptionMessage).toBe('Te has suscrito correctamente a las notificaciones de tasas.');
    expect(component.showMessage).toBeFalse();
    expect(mockForm.resetForm).toHaveBeenCalled();
  }));

  it('should handle subscription error', fakeAsync(() => {
    const mockForm = jasmine.createSpyObj('NgForm', ['resetForm']);
    component.email = 'test@example.com';

    bankRatesService.subscribeToNotifications.and.returnValue(throwError(() => new Error('Error de suscripción')));

    component.subscribe(mockForm as unknown as NgForm);

    // Simular el paso del tiempo para que el mensaje de error desaparezca
    tick(3000);
    fixture.detectChanges();

    expect(bankRatesService.subscribeToNotifications).toHaveBeenCalled();
    expect(component.subscriptionMessage).toBe('Hubo un problema con la suscripción, intenta nuevamente.');
    expect(component.showMessage).toBeFalse();
  }));
});
