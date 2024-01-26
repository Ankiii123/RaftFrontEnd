import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private path = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) { }

  public signOutExternal = () => {
    localStorage.removeItem("auth_token");
    console.log("Auth Token deleted");
  }

  public createUser(credentials: string): Observable<any> {
    const header = new HttpHeaders().set('Content-type', 'text/plain;charset=UTF-8');
    return this.httpClient.post(
      this.path + "api/auth/createUser", 
      credentials, 
      {headers: header}
    );
  }

  getToken():string | null {
    return localStorage.getItem("auth_token");
  }

  setToken(tokenPayload: string): void {
    localStorage.setItem("auth_token", tokenPayload);
  }

  isTokenPresent():boolean {
    return localStorage.getItem("auth_token") != null;
  }
  
  public fetchUserRole(token: string): Observable<any> {
    const header = new HttpHeaders().set('Content-type', 'application/json')
                                    .set('Authorization', `Bearer ${localStorage.getItem("auth_token")}`);
    return this.httpClient.get(
      this.path + `api/auth/getUser`,
      {headers: header}
    );
  }
}
