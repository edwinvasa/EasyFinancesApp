import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCreditoActualComponent } from './info-credito-actual.component';

describe('InfoCreditoActualComponent', () => {
  let component: InfoCreditoActualComponent;
  let fixture: ComponentFixture<InfoCreditoActualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoCreditoActualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCreditoActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
