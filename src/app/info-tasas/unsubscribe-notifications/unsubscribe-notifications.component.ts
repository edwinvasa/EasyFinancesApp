import { Component } from '@angular/core';
import { BankRatesService } from '../services/bank-rates.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-unsubscribe-notifications',
  templateUrl: './unsubscribe-notifications.component.html'
})
export class UnsubscribeNotificationsComponent {
  email: string = '';
  unsubscribeMessage: string = '';
  showMessage: boolean = false;

  constructor(private readonly bankRatesService: BankRatesService) { }

  unsubscribe(unsubscribeForm: NgForm): void {
    this.bankRatesService.unsubscribeFromNotifications(this.email).subscribe({
      next: () => {
        this.unsubscribeMessage = 'Has cancelado tu suscripción a las notificaciones.';
        this.showMessage = true;
        unsubscribeForm.resetForm();
        setTimeout(() => this.showMessage = false, 3000);
      },
      error: (err) => {
        console.error('Error al cancelar la suscripción:', err);
        this.unsubscribeMessage = 'Hubo un problema al cancelar la suscripción, intenta nuevamente.';
        this.showMessage = true;
        setTimeout(() => this.showMessage = false, 3000);
      }
    });
  }
}
