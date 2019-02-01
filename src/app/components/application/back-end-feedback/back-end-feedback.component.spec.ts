import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEndFeedbackComponent } from './back-end-feedback.component';

describe('BackEndFeedbackComponent', () => {
  let component: BackEndFeedbackComponent;
  let fixture: ComponentFixture<BackEndFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackEndFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackEndFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
