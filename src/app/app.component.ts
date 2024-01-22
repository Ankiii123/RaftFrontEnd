import { Component, Input } from '@angular/core';
import { RequestAccessComponent } from './request-access/request-access.component';
import { DataService } from './services/data.service';


interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'RaftFrontEndAngular';
  isSideNavCollapsed = false;
  screenWidth = 0;

  constructor(public _dataService: DataService ){
  }
  


  onToggleSideNav(data: SideNavToggle): void{
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed
  }

  isAuthenticated():boolean{
    return localStorage.getItem("auth_token") !==null;
  }
}
