import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CredentialResponse, PromptMomentNotification} from 'google-one-tap';
import { AuthService } from '../services/auth.service';
import { firstValueFrom } from 'rxjs';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  constructor(private router: Router, private _ngZone: NgZone, private service: AuthService) {}
  ngOnInit(): void {
    // @ts-ignore
    window.onGoogleLibraryLoad = () => {
      // @ts-ignore
      google.accounts.id.initialize({
        client_id: '888908128889-t24335rv56vhplh02rubq4u514ui641e.apps.googleusercontent.com',
        callback: this.handleCredentialResponse.bind(this),
        auto_select: false,
        cancel_on_tap_outside: true
      });
      // @ts-ignore
      google.accounts.id.renderButton(
        // @ts-ignore
        document.getElementById('buttonDiv'),
        { theme: 'outline', size: 'large', width: '100%' }
      );
      // @ts-ignore
      google.accounts.id.prompt((notification: PromptMomentNotification) => {});
    }
  }
  async handleCredentialResponse(response: CredentialResponse) {
    try {
      await firstValueFrom(this.service.createUser(response.credential)).then(
        (x) => {
          console.log(x.authToken);
          this.service.setToken(x.authToken);
          if(x.isNewUser) {
            this.router.navigate(["/userdetailsform"])
          }
           else {
            this.router.navigate(["/dashboard"]);
          }
        }
      )
    } catch(err) {
      console.log(err);
    }
  }
}
