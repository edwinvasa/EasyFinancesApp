import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeNotificationsComponent } from './subscribe-notifications.component';

describe('SubscribeNotificationsComponent', () => {
  let component: SubscribeNotificationsComponent;
  let fixture: ComponentFixture<SubscribeNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubscribeNotificationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribeNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
