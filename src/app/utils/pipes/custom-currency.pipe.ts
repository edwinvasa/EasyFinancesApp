import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {
  transform(value: number | string, currencyCode: string = 'COP', display: 'symbol' | 'code' = 'symbol', digitsInfo: string = '1.0-0'): string | null {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: currencyCode,
      currencyDisplay: display, // 'symbol' o 'code', según la compatibilidad
      minimumFractionDigits: digitsInfo ? parseInt(digitsInfo.split('.')[1], 10) : 0 // Asegúrate de parsear correctamente los dígitos decimales
    }).format(Number(value));
  }
}
