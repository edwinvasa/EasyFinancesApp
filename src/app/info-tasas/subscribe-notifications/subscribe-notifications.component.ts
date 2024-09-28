import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { BankRatesService } from '../services/bank-rates.service';
import { NgForm } from '@angular/forms';

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

  subscribe(subscribeForm: NgForm): void {
    const userId = uuidv4();
    this.bankRatesService.subscribeToNotifications(userId, this.email).subscribe({
      next: () => {
        this.subscriptionMessage = 'Te has suscrito correctamente a las notificaciones de tasas.';
        this.showMessage = true;
        subscribeForm.resetForm();
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
