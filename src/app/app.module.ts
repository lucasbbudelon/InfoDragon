// Angular
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// External Modules

// Routes
import { AppRoutingModule } from './app-routing.module';

// Services
import { CookieService } from 'ngx-cookie-service';
import { DragonService, LoginService } from './services/_index';

// Layouts
import { AppComponent } from './app.component';
import { DefaultPageLayoutComponent } from './layouts/_index';
import { HomePageLayoutComponent } from './layouts/_index';
import { LoginLayoutComponent } from './layouts/_index';
import { PageNotFoundLayoutComponent } from './layouts/_index';

// Components (application)
import { NavMenuComponent } from './components/application/_index';
import { TopRightMenuComponent } from './components/application/_index';
import { TopRightMenuNotificationComponent } from './components/application/_index';
import { TopRightMenuUserComponent } from './components/application/_index';
import { BackEndFeedbackComponent } from './components/application/back-end-feedback/back-end-feedback.component';

// Components (core)
import { DragonComponent } from './components/core/_index';
import { DragonDetailComponent } from './components/core/_index';
import { LoginComponent } from './components/core/_index';


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
    LoginComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    CookieService,
    DragonService,
    LoginService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
