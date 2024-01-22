// src/app/services/requirement.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BenchCandidate } from '../interfaces/Bench';

@Injectable({
  providedIn: 'root'
})
export class BenchService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getAllBenchCandidates(): Observable<BenchCandidate[]> {
    return this.http.get<BenchCandidate[]>(`${this.apiUrl}/bench/all`);
  }    

  addCandidate(candidate: BenchCandidate): Observable<BenchCandidate> {
    return this.http.post<BenchCandidate>(`${this.apiUrl}/bench/addCandidate`, candidate);
  }

  updateCandidate(id: number, updatedCandidate: BenchCandidate): Observable<BenchCandidate> {
    return this.http.put<BenchCandidate>(`${this.apiUrl}/bench/${id}/update`, updatedCandidate);
  }

  deleteCandidate(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/bench/${id}/delete`);
  }
}
