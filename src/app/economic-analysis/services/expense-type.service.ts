import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExpenseType } from '../interfaces/expense-type.interface';

@Injectable({
  providedIn: 'root'
})
export class ExpenseTypeService {
  private readonly apiUrl = 'https://easy-finances-app-63cef07822fc.herokuapp.com/api/expense-types';

  constructor(private readonly http: HttpClient) {}

  getExpenseTypes(): Observable<ExpenseType[]> {
    return this.http.get<ExpenseType[]>(this.apiUrl);
  }
}
