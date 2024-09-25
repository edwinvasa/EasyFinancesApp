import { Component, EventEmitter, Output } from '@angular/core';
import { CreditInfo } from '../../interfaces/credit-info.interface';

@Component({
  selector: 'app-info-credito-actual',
  templateUrl: './info-credito-actual.component.html'
})
export class InfoCreditoActualComponent {
  @Output()
  onSubmitCreditInfo = new EventEmitter<CreditInfo>();

  creditInfo: CreditInfo = {
    monto: null,
    tipoTasa: 'TEA',
    tasa: null,
    plazo: null,
    tipoPlazo: 'Meses',
    abonosCapital: 'no', // Cambiado de string a boolean
    valorAbono: null,
    frecuenciaAbono: '',
    cuotaInicio: null
  };

  submitCreditInfo() {
    // Asegurar que todos los valores son correctos antes de enviar
    if (this.validarFormulario()) {
      this.onSubmitCreditInfo.emit(this.creditInfo);
    } else {
      console.error('Formulario no válido');
    }
  }

  validarFormulario(): boolean {
    const montoValido = this.creditInfo.monto !== null && Number(this.creditInfo.monto) > 500000;

    const basicValidation = montoValido && this.creditInfo.tasa !== null && this.creditInfo.plazo !== null;

    // Validar campos de abonos solo si abonosCapital es 'si'
    if (this.creditInfo.abonosCapital === 'si') {
      return basicValidation &&
        this.creditInfo.valorAbono !== null &&
        Number(this.creditInfo.valorAbono) > 10000 &&
        this.creditInfo.frecuenciaAbono !== '' &&
        this.creditInfo.cuotaInicio !== null;
    } else {
      return basicValidation;
    }
  }

}
