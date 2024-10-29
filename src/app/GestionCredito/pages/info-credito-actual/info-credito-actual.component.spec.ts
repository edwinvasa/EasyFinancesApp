import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoCreditoActualComponent } from './info-credito-actual.component';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CreditInfo } from '../../interfaces/credit-info.interface';
import { By } from '@angular/platform-browser';

fdescribe('InfoCreditoActualComponent', () => {
  let component: InfoCreditoActualComponent;
  let fixture: ComponentFixture<InfoCreditoActualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoCreditoActualComponent],
      imports: [FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoCreditoActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Inicializa la detección de cambios
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit onSubmitCreditInfo when submitCreditInfo is called with valid form', () => {
    const creditInfo: CreditInfo = {
      monto: 1000000,
      tipoTasa: 'TEA',
      tasa: 12.5,
      plazo: 72,
      tipoPlazo: 'Meses',
      abonosCapital: 'no',
      valorAbono: null,
      frecuenciaAbono: '',
      cuotaInicio: null
    };

    component.creditInfo = creditInfo;

    spyOn(component.onSubmitCreditInfo, 'emit');

    component.submitCreditInfo();

    expect(component.onSubmitCreditInfo.emit).toHaveBeenCalledWith(creditInfo);
  });

  it('should display error message when monto is less than 500,000', () => {
    // Establecer un monto inválido
    component.creditInfo.monto = 100000;
    fixture.detectChanges();

    // Simular el marcado de "dirty" y "touched"
    const montoInput = fixture.debugElement.query(By.css('#monto'));
    montoInput.nativeElement.dispatchEvent(new Event('input'));
    montoInput.nativeElement.dispatchEvent(new Event('blur'));
    fixture.detectChanges();

    const errorMessage = fixture.debugElement.query(By.css('.text-danger'))?.nativeElement.textContent;
    expect(errorMessage).toContain('El monto es obligatorio y debe ser mayor a $500.000');
  });

  it('should hide fields for capital repayments when abonosCapital is "no"', () => {
    // Establecer abonosCapital a "no"
    component.creditInfo.abonosCapital = 'no';
    fixture.detectChanges();

    const valorAbonoField = fixture.debugElement.query(By.css('#valorAbono'));
    const frecuenciaAbonoField = fixture.debugElement.query(By.css('#frecuenciaAbono'));
    const cuotaInicioField = fixture.debugElement.query(By.css('#cuotaInicio'));

    expect(valorAbonoField).toBeNull();
    expect(frecuenciaAbonoField).toBeNull();
    expect(cuotaInicioField).toBeNull();
  });

  it('should call submitCreditInfo when form is submitted', () => {
    spyOn(component, 'submitCreditInfo');

    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);

    expect(component.submitCreditInfo).toHaveBeenCalled();
  });
});
