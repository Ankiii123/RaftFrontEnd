import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BenchCandidate } from '../interfaces/Bench';

@Injectable({
  providedIn: 'root'
})
export class BenchService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders()
      .set('Content-type', 'text/plain;charset=UTF-8')
      .set('Authorization', `Bearer ${localStorage.getItem("auth_token")}`);
  }

  getAllBenchCandidates(): Observable<BenchCandidate[]> {
    const headers = this.getHeaders();
    return this.http.get<BenchCandidate[]>(`${this.apiUrl}/bench/all`, { headers });
  }    

  addCandidate(candidate: BenchCandidate): Observable<BenchCandidate> {
    const headers = this.getHeaders();
    return this.http.post<BenchCandidate>(`${this.apiUrl}/bench/addCandidate`, candidate, { headers });
  }

  updateCandidate(id: number, updatedCandidate: BenchCandidate): Observable<BenchCandidate> {
    const headers = this.getHeaders();
    return this.http.put<BenchCandidate>(`${this.apiUrl}/bench/${id}/update`, updatedCandidate, { headers });
  }

  deleteCandidate(id: number): Observable<void> {
    const headers = this.getHeaders();
    return this.http.delete<void>(`${this.apiUrl}/bench/${id}/delete`, { headers });
  }
}
