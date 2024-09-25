import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubscribeNotificationsComponent } from './unsubscribe-notifications.component';

describe('UnsubscribeNotificationsComponent', () => {
  let component: UnsubscribeNotificationsComponent;
  let fixture: ComponentFixture<UnsubscribeNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnsubscribeNotificationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnsubscribeNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
