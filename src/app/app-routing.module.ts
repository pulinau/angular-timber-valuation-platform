import { ManagerGuard } from './core/guards/manager.guard';
import { AdminGuard } from './core/guards/admin.guard';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './login-register/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SubmissionFormComponent } from './assessments/submission-form/submission-form.component';
import { ViewComponent } from './assessments/view/view.component';
import { PriceListFormComponent } from './price-list/price-list-form/price-list-form.component';
import { PriceListViewComponent } from './price-list/price-list-view/price-list-view.component';
import { DevOfficerGuard } from './core/guards/dev-officer.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: DashboardComponent,
    data: {
      breadcrumb: 'dashboard'
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'assessments',
    data: { breadcrumb: 'assessments' },
    children: [
      { path: '', component: ViewComponent },
      {
        path: 'form',
        component: SubmissionFormComponent,
        data: { breadcrumb: 'form' },
        canActivate: [DevOfficerGuard]
      },
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'pricelist',
    data: { breadcrumb: 'pricelist' },
    children: [
      { path: '', component: PriceListViewComponent, },
      {
        path: 'form',
        component: PriceListFormComponent,
        data: { breadcrumb: 'form' },
        canActivate: [ManagerGuard]
      }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'users/manage',
    data: { breadcrumb: 'manage users' },
    component: AdminPanelComponent,
    canActivate: [AuthGuard, AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
