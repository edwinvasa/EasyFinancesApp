import { Component, OnInit } from '@angular/core';
import { BankRatesService } from '../../services/bank-rates.service';
import { BankRate } from '../../interfaces/bank-rate.interface';

@Component({
  selector: 'app-bank-interest-rates',
  templateUrl: './bank-interest-rates.component.html',
  styleUrls: ['./bank-interest-rates.component.css']
})
export class BankInterestRatesComponent implements OnInit {
  bankRates: BankRate[] = [];

  constructor(private bankRatesService: BankRatesService) { }

  ngOnInit(): void {
    this.bankRatesService.getBankRates().subscribe({
      next: (rates) => {
        this.bankRates = rates.sort((a, b) => a.interestRate - b.interestRate);
      },
      error: (err) => console.error('Error fetching bank rates:', err)
    });
  }
}
