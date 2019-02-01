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
    expect(element.querySelector('h1').innerText).toEqual('Dragão #123456789', 'title');
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
