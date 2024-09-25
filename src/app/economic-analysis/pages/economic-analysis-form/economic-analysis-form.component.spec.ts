import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicAnalysisFormComponent } from './economic-analysis-form.component';

describe('EconomicAnalysisFormComponent', () => {
  let component: EconomicAnalysisFormComponent;
  let fixture: ComponentFixture<EconomicAnalysisFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EconomicAnalysisFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EconomicAnalysisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
