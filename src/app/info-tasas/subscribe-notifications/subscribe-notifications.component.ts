import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { BankRatesService } from '../services/bank-rates.service';

@Component({
  selector: 'app-subscribe-notifications',
  templateUrl: './subscribe-notifications.component.html',
  styleUrls: ['./subscribe-notifications.component.css']
})
export class SubscribeNotificationsComponent {
  email: string = '';
  subscriptionMessage: string = '';
  showMessage: boolean = false;

  constructor(private bankRatesService: BankRatesService) { }

  subscribe(): void {
    const userId = uuidv4(); // Generar un userId aleatorio
    this.bankRatesService.subscribeToNotifications(userId, this.email).subscribe({
      next: () => {
        this.subscriptionMessage = 'Te has suscrito correctamente a las notificaciones de tasas.';
        this.showMessage = true;
        this.email = ''; // Limpiar el campo de email
        // Ocultar el mensaje después de unos segundos
        setTimeout(() => this.showMessage = false, 3000);
      },
      error: (err) => {
        console.error('Error al suscribirse a las notificaciones:', err);
        this.subscriptionMessage = 'Hubo un problema con la suscripción, intenta nuevamente.';
        this.showMessage = true;
        setTimeout(() => this.showMessage = false, 3000);
      }
    });
  }
}
