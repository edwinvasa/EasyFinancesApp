import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisCreditoComponent } from './analisis-credito.component';

describe('AnalisisCreditoComponent', () => {
  let component: AnalisisCreditoComponent;
  let fixture: ComponentFixture<AnalisisCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnalisisCreditoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalisisCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
