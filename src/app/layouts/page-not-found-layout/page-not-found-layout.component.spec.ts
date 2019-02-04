import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts/ng2-charts';

import { CookieService } from 'ngx-cookie-service/cookie-service/cookie.service';

import { BackEndFeedbackComponent, NavMenuComponent } from '../../components/application/_index';
import { TopRightMenuComponent, TopRightMenuNotificationComponent, TopRightMenuUserComponent } from '../../components/application/_index';

import { DragonDasboardComponent, LoginComponent } from '../../components/core/_index';

import { DefaultPageLayoutComponent, HomePageLayoutComponent } from '../_index';
import { LoginLayoutComponent } from '../_index';
import { PageNotFoundLayoutComponent } from '../_index';

import { DragonService, LoginService } from '../../services/_index';

describe('PageNotFoundLayoutComponent', () => {
  let component: PageNotFoundLayoutComponent;
  let fixture: ComponentFixture<PageNotFoundLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ChartsModule
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
        DragonDasboardComponent,
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
    fixture = TestBed.createComponent(PageNotFoundLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
