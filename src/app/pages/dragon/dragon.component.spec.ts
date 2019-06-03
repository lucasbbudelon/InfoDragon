import { HttpClient, HttpHandler } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CookieService } from 'ngx-cookie-service/cookie-service/cookie.service';
import { BackEndFeedbackComponent } from '../../components/back-end-feedback/back-end-feedback.component';
import { NavMenuComponent } from '../../components/nav-menu/nav-menu.component';
import { TopRightMenuNotificationComponent
 } from '../../components/top-right-menu/top-right-menu-notification/top-right-menu-notification.component';
import { TopRightMenuUserComponent } from '../../components/top-right-menu/top-right-menu-user/top-right-menu-user.component';
import { TopRightMenuComponent } from '../../components/top-right-menu/top-right-menu.component';
import { DefaultPageLayoutComponent } from '../../layouts/default-page-layout/default-page-layout.component';
import { HomePageLayoutComponent } from '../../layouts/home-page-layout/home-page-layout.component';
import { LoginLayoutComponent } from '../../layouts/login-layout/login-layout.component';
import { PageNotFoundLayoutComponent } from '../../layouts/page-not-found-layout/page-not-found-layout.component';
import { DragonDasboardComponent } from '../../pages/dragon/dragon-dasboard/dragon-dasboard.component';
import { DragonComponent } from '../../pages/dragon/dragon.component';
import { DragonService } from '../../pages/dragon/dragon.service';
import { LoginComponent } from '../../pages/login/login.component';
import { LoginService } from '../../pages/login/login.service';
import { Observable } from 'rxjs';

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
        DragonDasboardComponent,
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
