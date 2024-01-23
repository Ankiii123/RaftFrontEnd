import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api/userRoles';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    const header = new HttpHeaders()
      .set('Content-type', 'text/plain;charset=UTF-8')
      .set('Authorization', `Bearer ${localStorage.getItem("auth_token")}`);
    return this.http.get(
      `${this.baseUrl}/`,
      { headers: header }
    );
  }

  getUserById(id: number): Observable<any> {
    const header = new HttpHeaders()
      .set('Content-type', 'text/plain;charset=UTF-8')
      .set('Authorization', `Bearer ${localStorage.getItem("auth_token")}`);
    return this.http.get(`${this.baseUrl}/${id}`, { headers: header });
  }

  updateUser(id: number, user: any): Observable<any> {
    const header = new HttpHeaders()
      .set('Content-type', 'text/plain;charset=UTF-8')
      .set('Authorization', `Bearer ${localStorage.getItem("auth_token")}`);
    return this.http.put(`${this.baseUrl}/${id}/update`, user, {headers: header});
  }

  deleteUser(id: number): Observable<any> {
    const header = new HttpHeaders()
      .set('Content-type', 'text/plain;charset=UTF-8')
      .set('Authorization', `Bearer ${localStorage.getItem("auth_token")}`);
    return this.http.delete(`${this.baseUrl}/${id}/delete`, {headers: header});
  }
}
