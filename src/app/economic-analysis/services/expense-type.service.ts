import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExpenseType } from '../interfaces/expense-type.interface';

@Injectable({
  providedIn: 'root'
})
export class ExpenseTypeService {
  private apiUrl = 'https://easy-finances-app-63cef07822fc.herokuapp.com/api/expense-types';

  constructor(private http: HttpClient) {}

  getExpenseTypes(): Observable<ExpenseType[]> {
    return this.http.get<ExpenseType[]>(this.apiUrl);
  }
}
