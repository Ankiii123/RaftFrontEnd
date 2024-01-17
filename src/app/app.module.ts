import { NgModule } from '@angular/core';
import { BrowserModule, platformBrowser } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { FulfillmentsComponent } from './fulfillments/fulfillments.component';
import { BenchComponent } from './bench/bench.component';
import { RaftNavbarComponent } from './raft-navbar/raft-navbar.component';
import { animation } from '@angular/animations';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    RequirementsComponent,
    SubmissionsComponent,
    FulfillmentsComponent,
    BenchComponent,
    RaftNavbarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
