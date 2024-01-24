import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { FulfillmentsComponent } from './fulfillments/fulfillments.component';
import { BenchCandidatesComponent } from './bench/bench.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestAccessComponent } from './request-access/request-access.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]
  },
  {
    path: 'requirements', component: RequirementsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'submissions', component: SubmissionsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'fulfillments', component: FulfillmentsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'bench', component: BenchCandidatesComponent, canActivate: [AuthGuard]
  },
  {
    path: 'users', component: UsersComponent, canActivate: [AuthGuard]
  },
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'requestAccess',
    component: RequestAccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
