import { HttpClient, HttpHandler } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CookieService } from 'ngx-cookie-service/cookie-service/cookie.service';
import { BackEndFeedbackComponent } from '../../../components/back-end-feedback/back-end-feedback.component';
import { NavMenuComponent } from '../../../components/nav-menu/nav-menu.component';
import {
  TopRightMenuNotificationComponent
} from '../../../components/top-right-menu/top-right-menu-notification/top-right-menu-notification.component';
import { TopRightMenuUserComponent } from '../../../components/top-right-menu/top-right-menu-user/top-right-menu-user.component';
import { TopRightMenuComponent } from '../../../components/top-right-menu/top-right-menu.component';
import { DefaultPageLayoutComponent } from '../../../layouts/default-page-layout/default-page-layout.component';
import { HomePageLayoutComponent } from '../../../layouts/home-page-layout/home-page-layout.component';
import { LoginLayoutComponent } from '../../../layouts/login-layout/login-layout.component';
import { PageNotFoundLayoutComponent } from '../../../layouts/page-not-found-layout/page-not-found-layout.component';
import { DragonDasboardComponent } from '../../../pages/dragon/dragon-dasboard/dragon-dasboard.component';
import { DragonComponent } from '../../../pages/dragon/dragon.component';
import { DragonService } from '../../../pages/dragon/dragon.service';
import { LoginComponent } from '../../../pages/login/login.component';
import { LoginService } from '../../../pages/login/login.service';
import { DragonDetailComponent } from './dragon-detail.component';

describe('DragonDetailComponent', () => {
  let component: DragonDetailComponent;
  let fixture: ComponentFixture<DragonDetailComponent>;
  let element;

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
        DragonComponent,
        DragonDetailComponent,
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
    fixture = TestBed.createComponent(DragonDetailComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('title put', () => {
    component.id = '123456789';
    component.update = true;
    fixture.detectChanges();
    expect(element.querySelector('h1').innerText).toEqual('Dragão # 123456789', 'title');
  });

  it('title post', () => {
    component.update = false;
    fixture.detectChanges();
    expect(element.querySelector('h1').innerText).toEqual('Inclusão de Dragão', 'title');
  });

  it('page buttons', () => {
    expect(element.querySelector('i.fa-save')).toBeTruthy('button-save');
    expect(element.querySelector('i.fa-arrow-left')).toBeTruthy('button-back');
    expect(element.querySelector('i.fa-trash')).toBeTruthy('button-delete');
  });
});
