import { Component } from '@angular/core';
import { BankRatesService } from '../services/bank-rates.service';

@Component({
  selector: 'app-unsubscribe-notifications',
  templateUrl: './unsubscribe-notifications.component.html',
  styleUrls: ['./unsubscribe-notifications.component.css']
})
export class UnsubscribeNotificationsComponent {
  email: string = '';
  unsubscribeMessage: string = '';
  showMessage: boolean = false;

  constructor(private bankRatesService: BankRatesService) { }

  unsubscribe(): void {
    this.bankRatesService.unsubscribeFromNotifications(this.email).subscribe({
      next: () => {
        this.unsubscribeMessage = 'Has cancelado tu suscripción a las notificaciones.';
        this.showMessage = true;
        this.email = ''; // Limpiar el campo de email
        setTimeout(() => this.showMessage = false, 3000); // Ocultar el mensaje después de 3 segundos
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
