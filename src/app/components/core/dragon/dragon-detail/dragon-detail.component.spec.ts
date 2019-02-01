import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { CookieService } from 'ngx-cookie-service/cookie-service/cookie.service';

import { BackEndFeedbackComponent, NavMenuComponent } from '../../../../components/application/_index';
import { TopRightMenuComponent } from '../../../../components/application/_index';
import { TopRightMenuNotificationComponent } from '../../../../components/application/_index';
import { TopRightMenuUserComponent } from '../../../../components/application/_index';

import { DragonComponent, DragonDetailComponent, LoginComponent } from '../../../../components/core/_index';

import { DefaultPageLayoutComponent, HomePageLayoutComponent } from '../../../../layouts/_index';
import { LoginLayoutComponent } from '../../../../layouts/_index';
import { PageNotFoundLayoutComponent } from '../../../../layouts/_index';

import { DragonService, LoginService } from '../../../../services/_index';

describe('DragonDetailComponent', () => {
  let component: DragonDetailComponent;
  let fixture: ComponentFixture<DragonDetailComponent>;

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
        DragonDetailComponent,
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
    fixture = TestBed.createComponent(DragonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
