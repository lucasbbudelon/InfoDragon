import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

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

  const dragonServiceMock: Partial<DragonService> = {
    getAll: () => {
      return Observable.create(observer => {
        observer.complete();
      });
    }
  };

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
        { provide: DragonService, useValue: dragonServiceMock },
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

  it('binding items', () => {
    component.dragons = [
      { id: '1', name: 'Dragon 1', createdAt: 'date 1', type: 'type 1' },
      { id: '2', name: 'Dragon 2', createdAt: 'date 2', type: 'type 2', histories: ['', '', ''] },
      { id: '3', name: 'Dragon 3', createdAt: 'date 3', type: 'type 3' }
    ];

    fixture.detectChanges();

    const thead = document.querySelector('table').querySelector('thead');
    expect(thead.children[0].children[0].innerHTML).toBe('Id');
    expect(thead.children[0].children[1].innerHTML).toBe('Nome');
    expect(thead.children[0].children[2].innerHTML).toBe('Tipo');
    expect(thead.children[0].children[3].innerHTML).toBe('Filmes/Séries');

    const tbody = document.querySelector('table').querySelector('tbody');
    expect(tbody.childElementCount).toBe(3);
    expect(tbody.children[1].children[0].querySelector('a').innerText).toBe('2');
    expect(tbody.children[1].children[1].querySelector('a').innerText).toBe('Dragon 2');
    expect(tbody.children[1].children[2].querySelector('a').innerText).toBe('type 2');
    expect(tbody.children[1].children[3].querySelector('a').innerText).toBe('3');
  });
});
