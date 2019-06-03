
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackEndFeedbackComponent } from './components/back-end-feedback/back-end-feedback.component';
import { NavMenuComponent, TopRightMenuComponent, TopRightMenuNotificationComponent, TopRightMenuUserComponent } from './components/_index';
import { DefaultPageLayoutComponent, HomePageLayoutComponent, LoginLayoutComponent, PageNotFoundLayoutComponent } from './layouts/_index';
import { DragonDasboardComponent } from './pages/dragon/dragon-dasboard/dragon-dasboard.component';
import { DragonDetailComponent } from './pages/dragon/dragon-detail/dragon-detail.component';
import { DragonComponent } from './pages/dragon/dragon.component';
import { DragonService } from './pages/dragon/dragon.service';
import { LoginComponent } from './pages/login/login.component';
import { LoginService } from './pages/login/login.service';

@NgModule({
  declarations: [
    AppComponent,
    DefaultPageLayoutComponent,
    HomePageLayoutComponent,
    LoginLayoutComponent,
    PageNotFoundLayoutComponent,
    NavMenuComponent,
    TopRightMenuComponent,
    TopRightMenuNotificationComponent,
    TopRightMenuUserComponent,
    BackEndFeedbackComponent,
    DragonComponent,
    DragonDetailComponent,
    LoginComponent,
    DragonDasboardComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [
    CookieService,
    DragonService,
    LoginService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
