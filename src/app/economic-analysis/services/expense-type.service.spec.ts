import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ExpenseTypeService } from './expense-type.service';
import { ExpenseType } from '../interfaces/expense-type.interface';

describe('ExpenseTypeService', () => {
  let service: ExpenseTypeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ExpenseTypeService]
    });
    service = TestBed.inject(ExpenseTypeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch expense types', () => {
    const mockExpenseTypes: ExpenseType[] = [
      { id: 1, name: 'Alquiler', category: 'Vivienda' },
      { id: 2, name: 'Transporte', category: 'Transporte' }
    ];

    service.getExpenseTypes().subscribe((types) => {
      expect(types.length).toBe(2);
      expect(types).toEqual(mockExpenseTypes);
    });

    const req = httpMock.expectOne('https://easy-finances-app-63cef07822fc.herokuapp.com/api/expense-types');
    expect(req.request.method).toBe('GET');
    req.flush(mockExpenseTypes);
  });
});
