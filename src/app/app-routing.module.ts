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

const routes: Routes = [
  
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'requirements', component: RequirementsComponent
  },
  {
    path: 'submissions', component: SubmissionsComponent
  },
  {
    path: 'fulfillments', component: FulfillmentsComponent
  },
  {
    path: 'bench', component: BenchCandidatesComponent
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
