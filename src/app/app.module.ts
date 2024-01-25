import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { FulfillmentsComponent } from './fulfillments/fulfillments.component';
import { BenchCandidatesComponent } from './bench/bench.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { DxButtonModule, DxDataGridModule, DxLookupModule, DxSelectBoxModule, DxTemplateModule } from 'devextreme-angular';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AddRequirementDialogComponent } from './add-requirement-dialog-component/add-requirement-dialog-component.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatOptionModule } from '@angular/material/core';
import { AddSubmissionDialogComponent } from './add-submission-dialog/add-submission-dialog.component';
import { AddBenchCandidateDialogComponent } from './add-bench-candidate-dialog/add-bench-candidate-dialog.component';
import {MatMenuModule} from '@angular/material/menu';
import { UsersComponent } from './users/users.component';
import { AddFulfillmentDialogComponent } from './add-fulfillment-dialog/add-fulfillment-dialog.component'
import { AddUserDialogComponentComponent } from './add-user-dialog-component/add-user-dialog-component.component'


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    RequirementsComponent,
    SubmissionsComponent,
    FulfillmentsComponent,
    BenchCandidatesComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    ProfileComponent,
    AddRequirementDialogComponent,
    AddBenchCandidateDialogComponent,
    UsersComponent,
    AddUserDialogComponentComponent,
    AddSubmissionDialogComponent,
    AddBenchCandidateDialogComponent,
    UsersComponent,
    AddFulfillmentDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    DxDataGridModule,
    DxLookupModule,
    DxButtonModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    DxSelectBoxModule,
    DxTemplateModule,
    MatInputModule,
    MatDialogModule,
    MatOptionModule,
    MatInputModule,
    MatMenuModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
