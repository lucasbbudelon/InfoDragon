import { HttpClient, HttpHandler } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ChartsModule } from 'ng2-charts';
import { CookieService } from 'ngx-cookie-service';
import { BackEndFeedbackComponent } from 'src/app/components/back-end-feedback/back-end-feedback.component';
import { NavMenuComponent } from 'src/app/components/nav-menu/nav-menu.component';
import { TopRightMenuNotificationComponent
 } from 'src/app/components/top-right-menu/top-right-menu-notification/top-right-menu-notification.component';
import { TopRightMenuUserComponent } from 'src/app/components/top-right-menu/top-right-menu-user/top-right-menu-user.component';
import { TopRightMenuComponent } from 'src/app/components/top-right-menu/top-right-menu.component';
import { DragonDasboardComponent } from 'src/app/pages/dragon/dragon-dasboard/dragon-dasboard.component';
import { DragonService } from 'src/app/pages/dragon/dragon.service';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { LoginService } from 'src/app/pages/login/login.service';
import { DefaultPageLayoutComponent } from '../default-page-layout/default-page-layout.component';
import { HomePageLayoutComponent } from '../home-page-layout/home-page-layout.component';
import { LoginLayoutComponent } from '../login-layout/login-layout.component';
import { PageNotFoundLayoutComponent } from '../page-not-found-layout/page-not-found-layout.component';

describe('HomePageLayoutComponent', () => {
  let component: HomePageLayoutComponent;
  let fixture: ComponentFixture<HomePageLayoutComponent>;

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
        LoginComponent,
        DragonDasboardComponent
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
    fixture = TestBed.createComponent(HomePageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
