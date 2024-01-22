import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = 'http://localhost:8080/api/accounts'; 

  constructor(private http: HttpClient) {}

  createAccount(account: any): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/create`, account);
  }

  updateAccount(id: number, updatedAccount: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}/update`, updatedAccount);
  }

  getAllAccounts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  }

  getAccountById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  deleteAccountById(id: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/${id}/delete`);
  }
}
