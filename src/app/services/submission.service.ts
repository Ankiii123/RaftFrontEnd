// submission.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Submission } from '../interfaces/Submission';

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {
  private baseUrl = 'http://localhost:8080/api/submission'; 

  constructor(private http: HttpClient) { }

  createSubmission(submission: Submission): Observable<Submission> {
    return this.http.post<Submission>(`${this.baseUrl}/create`, submission);
  }

  getAllSubmissions(): Observable<Submission[]> {
    return this.http.get<Submission[]>(`${this.baseUrl}/all`);
  }

  getSubmissionById(id: number): Observable<Submission> {
    return this.http.get<Submission>(`${this.baseUrl}/${id}`);
  }

  updateSubmission(id: number, updatedSubmission: Submission): Observable<Submission> {
    return this.http.put<Submission>(`${this.baseUrl}/${id}/update`, updatedSubmission);
  }

  deleteSubmission(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}/delete`);
  }
}
