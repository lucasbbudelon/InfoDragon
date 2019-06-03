import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { DefaultPageLayoutComponent, HomePageLayoutComponent, LoginLayoutComponent, PageNotFoundLayoutComponent } from './layouts/_index';
import { DragonDetailComponent } from './pages/dragon/dragon-detail/dragon-detail.component';
import { DragonComponent } from './pages/dragon/dragon.component';

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
    canActivate: [AuthGuard],
    component: HomePageLayoutComponent
  },
  {
    path: 'dragon',
    component: DefaultPageLayoutComponent,
    canActivate: [AuthGuard],
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
