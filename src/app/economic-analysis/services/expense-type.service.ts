import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExpenseType } from '../interfaces/expense-type.interface';

@Injectable({
  providedIn: 'root'
})
export class ExpenseTypeService {
  private apiUrl = 'http://localhost:8080/api/expense-types';

  constructor(private http: HttpClient) {}

  getExpenseTypes(): Observable<ExpenseType[]> {
    return this.http.get<ExpenseType[]>(this.apiUrl);
  }
}
