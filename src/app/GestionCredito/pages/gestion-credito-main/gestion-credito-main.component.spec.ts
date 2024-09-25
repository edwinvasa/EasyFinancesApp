import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCreditoMainComponent } from './gestion-credito-main.component';

describe('GestionCreditoMainComponent', () => {
  let component: GestionCreditoMainComponent;
  let fixture: ComponentFixture<GestionCreditoMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestionCreditoMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionCreditoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
