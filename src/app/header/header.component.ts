import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, HostListener, Input, NgZone, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  canShowSearchAsOverlay = false;

  switchTheme = new FormControl(false)
  @HostBinding('class') className='';
  darkClass ='theme-dark';
  lightClass='theme-light';

  constructor(public overlay:OverlayContainer, private router: Router, private _ngZone: NgZone, private service: AuthService){
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any){
    this.checkCanShowSearchAsOverlay(window.innerWidth);
  }

  ngOnInit(): void{
    this.checkCanShowSearchAsOverlay(window.innerWidth);

    this.switchTheme.valueChanges.subscribe((currentMode)=>{
    this.className=currentMode?this.lightClass:this.darkClass;

    if(currentMode){
      this.overlay.getContainerElement().classList.add(this.darkClass)
    }
    else{
      this.overlay.getContainerElement().classList.remove(this.darkClass)
    }
    }
    )
  }

  logout() {
    console.log("logout clicked");
    
    this.service.signOutExternal();
    this._ngZone.run(() => {
      this.router.navigate(['/']).then(() => window.location.reload());
    })
  }

  getHeadClass(): string{
    let styleClass = '';

    if(this.collapsed && this.screenWidth > 768){
      styleClass = 'head-trimmed';
    }
    else{
      styleClass = 'head-md-screen';
    }

    return styleClass;
  }

  checkCanShowSearchAsOverlay(innerWidth: number): void{
    if(innerWidth < 845){
      this.canShowSearchAsOverlay = true;
    }
    else{
      this.canShowSearchAsOverlay = false;
    }
  }

}
