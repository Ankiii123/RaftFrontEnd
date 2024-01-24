// src/app/services/requirement.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BenchCandidate } from '../interfaces/Bench';

@Injectable({
  providedIn: 'root'
})
export class BenchService {
  private apiUrl = 'http://localhost:8080/api/bench';

  constructor(private http: HttpClient) { }

  getAllBenchCandidates(): Observable<BenchCandidate[]> {

 const header = new HttpHeaders()
      .set('Content-type',  'application/json')
      .set('Authorization', `Bearer ${localStorage.getItem("auth_token")}`);
    return this.http.get<BenchCandidate[]>(`${this.apiUrl}/all`,
      { headers: header }
    );


    // return this.http.get<BenchCandidate[]>(`${this.apiUrl}/all`);
  }    

  addCandidate(candidate: BenchCandidate): Observable<BenchCandidate> {
    const header = new HttpHeaders()
    .set('Content-type',  'application/json')
    .set('Authorization', `Bearer ${localStorage.getItem("auth_token")}`);
  return this.http.post<BenchCandidate>(`${this.apiUrl}/addCandidate`, candidate,
    { headers: header }
  );


    // return this.http.post<BenchCandidate>(`${this.apiUrl}/addCandidate`, candidate);
  }

  updateCandidate(id: number, updatedCandidate: BenchCandidate): Observable<BenchCandidate> {
    const header = new HttpHeaders()
    .set('Content-type',  'application/json')
    .set('Authorization', `Bearer ${localStorage.getItem("auth_token")}`);
  return this.http.put<BenchCandidate>(`${this.apiUrl}/${id}/update`, updatedCandidate,
    { headers: header }
  );
    // return this.http.put<BenchCandidate>(`${this.apiUrl}/${id}/update`, updatedCandidate);
  }

  deleteCandidate(id: number): Observable<void> {
    const header = new HttpHeaders()
    .set('Content-type',  'application/json')
    .set('Authorization', `Bearer ${localStorage.getItem("auth_token")}`);
  return this.http.delete<void>(`${this.apiUrl}/${id}/delete`,
    { headers: header }
  );

    // return this.http.delete<void>(`${this.apiUrl}/${id}/delete`);
  }
}
