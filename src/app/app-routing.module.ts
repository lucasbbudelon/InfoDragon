import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Guards
import { AuthenticationDefaultGuard } from './guards/_index';

// Layout
import { DefaultPageLayoutComponent } from './layouts/_index';
import { HomePageLayoutComponent } from './layouts/_index';
import { LoginLayoutComponent } from './layouts/_index';
import { PageNotFoundLayoutComponent } from './layouts/_index';

// Components
import { DragonComponent, DragonDetailComponent } from './components/core/_index';

const routes: Routes = [
  {
    path: 'login',
    component: LoginLayoutComponent
  },
  {
    path: '',
    redirectTo: '/dragon/list',
    pathMatch: 'full'
  },
  {
    path: 'home',
    canActivate: [AuthenticationDefaultGuard],
    component: HomePageLayoutComponent
  },
  {
    path: 'dragon',
    component: DefaultPageLayoutComponent,
    canActivate: [AuthenticationDefaultGuard],
    children: [
      { path: 'list', component: DragonComponent },
      { path: 'new', component: DragonDetailComponent },
      { path: 'detail/:id', component: DragonDetailComponent }
    ]
  },
  {
    path: '**',
    component: PageNotFoundLayoutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
