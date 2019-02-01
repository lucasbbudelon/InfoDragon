import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRightMenuUserComponent } from './top-right-menu-user.component';

describe('TopRightMenuUserComponent', () => {
  let component: TopRightMenuUserComponent;
  let fixture: ComponentFixture<TopRightMenuUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopRightMenuUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRightMenuUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
