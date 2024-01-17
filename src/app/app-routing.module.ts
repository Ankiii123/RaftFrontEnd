import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { FulfillmentsComponent } from './fulfillments/fulfillments.component';
import { BenchComponent } from './bench/bench.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },

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
    path: 'bench', component: BenchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
