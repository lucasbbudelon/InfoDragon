import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { CookieService } from 'ngx-cookie-service/cookie-service/cookie.service';

import { BackEndFeedbackComponent, NavMenuComponent } from '../../../components/application/_index';
import { TopRightMenuComponent } from '../../../components/application/_index';
import { TopRightMenuNotificationComponent } from '../../../components/application/_index';
import { TopRightMenuUserComponent } from '../../../components/application/_index';

import { DragonComponent, LoginComponent } from '../../../components/core/_index';

import { DefaultPageLayoutComponent, HomePageLayoutComponent } from '../../../layouts/_index';
import { LoginLayoutComponent } from '../../../layouts/_index';
import { PageNotFoundLayoutComponent } from '../../../layouts/_index';

import { DragonService, LoginService } from '../../../services/_index';

describe('DragonComponent', () => {
  let component: DragonComponent;
  let fixture: ComponentFixture<DragonComponent>;
  let element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        DefaultPageLayoutComponent,
        HomePageLayoutComponent,
        LoginLayoutComponent,
        PageNotFoundLayoutComponent,
        BackEndFeedbackComponent,
        NavMenuComponent,
        TopRightMenuComponent,
        TopRightMenuNotificationComponent,
        TopRightMenuUserComponent,
        DragonComponent,
        LoginComponent
      ],
      providers: [
        HttpClient,
        HttpHandler,
        CookieService,
        DragonService,
        LoginService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('title', () => {
    fixture.detectChanges();
    expect(element.querySelector('h1').innerText).toEqual('Dragões', 'title');
  });

  it('page buttons', () => {
    expect(element.querySelector('i.fa-plus-circle')).toBeTruthy('button-new');
    expect(element.querySelector('i.fa-arrow-left')).toBeTruthy('button-back');
  });
});
