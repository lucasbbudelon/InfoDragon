import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRightMenuNotificationComponent } from './top-right-menu-notification.component';

describe('TopRightMenuNotificationComponent', () => {
  let component: TopRightMenuNotificationComponent;
  let fixture: ComponentFixture<TopRightMenuNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopRightMenuNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRightMenuNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
