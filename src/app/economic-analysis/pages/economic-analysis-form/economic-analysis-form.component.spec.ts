import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms'; 
import { CustomCurrencyPipe } from '../../../utils/pipes/custom-currency.pipe';
import { EconomicAnalysisResponse } from '../../interfaces/economic-analysis.interface';
import { EconomicAnalysisService } from '../../services/economic-analysis.service';
import { ExpenseTypeService } from '../../services/expense-type.service';
import { SharedExpenseService } from '../../services/shared-expense.service';
import { EconomicAnalysisFormComponent } from './economic-analysis-form.component';

fdescribe('EconomicAnalysisFormComponent', () => {
  let component: EconomicAnalysisFormComponent;
  let fixture: ComponentFixture<EconomicAnalysisFormComponent>;
  let economicAnalysisService: jasmine.SpyObj<EconomicAnalysisService>;

  beforeEach(async () => {
    const economicAnalysisSpy = jasmine.createSpyObj('EconomicAnalysisService', ['analyzeEconomicCapacity']);
    const expenseTypeSpy = jasmine.createSpyObj('ExpenseTypeService', ['getExpenseTypes']);
    const sharedExpenseSpy = jasmine.createSpyObj('SharedExpenseService', ['getExpenses', 'addExpense', 'editExpense', 'removeExpense']);

    // Configurar el retorno del mock de getExpenseTypes
    expenseTypeSpy.getExpenseTypes.and.returnValue(of([
      { id: 1, name: 'Alquiler', category: 'Vivienda' },
      { id: 2, name: 'Transporte', category: 'Transporte' }
    ]));

    await TestBed.configureTestingModule({
      declarations: [EconomicAnalysisFormComponent, CustomCurrencyPipe],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [
        { provide: EconomicAnalysisService, useValue: economicAnalysisSpy },
        { provide: ExpenseTypeService, useValue: expenseTypeSpy },
        { provide: SharedExpenseService, useValue: sharedExpenseSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EconomicAnalysisFormComponent);
    component = fixture.componentInstance;
    economicAnalysisService = TestBed.inject(EconomicAnalysisService) as jasmine.SpyObj<EconomicAnalysisService>;

    // Llamar a ngOnInit para inicializar el componente
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should analyze economic capacity', fakeAsync(() => {
    const mockResponse: EconomicAnalysisResponse = {
      id: 'mock-id',
      userId: 'mock-user-id',
      monthlyIncome: 5000,
      additionalIncome: 500,
      totalExpenses: 700,
      suggestedPaymentAmount: 1000,
      christmasBonusAmount: 0,
      midYearBonusAmount: 0
    };

    // Simular la respuesta del servicio
    economicAnalysisService.analyzeEconomicCapacity.and.returnValue(of(mockResponse));

    // Configurar los ingresos y gastos para asegurarse de que hay datos para analizar
    component.monthlyIncome = 5000;
    component.additionalIncome = 500;
    component.expenses = [{ expenseTypeId: 1, expenseTypeNameAndCategory: 'Alquiler - Vivienda', amount: 1000 }];

    // Forzar la detección de cambios antes de ejecutar el análisis
    fixture.detectChanges();

    // Ejecutar el método de análisis de capacidad económica
    component.analyzeEconomicCapacity();

    // Simular el paso del tiempo para que la suscripción al Observable se complete
    tick();

    // Forzar la detección de cambios después de la llamada al servicio
    fixture.detectChanges();

    // Verificar que el método haya sido llamado
    expect(economicAnalysisService.analyzeEconomicCapacity).toHaveBeenCalledTimes(1);
    expect(component.analysisResult).toEqual(mockResponse);
  }));
});
