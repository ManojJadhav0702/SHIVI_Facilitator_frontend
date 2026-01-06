import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../environment/environment';
import { Proposal, ApiResponse } from '../models/proposal.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred';
    
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = error.error?.message || `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    
    console.error('API Error:', errorMessage);
    return throwError(() => new Error(errorMessage));
  }

  submitProposal(proposal: Proposal): Observable<ApiResponse<Proposal>> {
    return this.http.post<ApiResponse<Proposal>>(
      `${this.apiUrl}/proposals`,
      proposal,
      { headers: this.getHeaders() }
    ).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getProposals(): Observable<ApiResponse<Proposal[]>> {
    return this.http.get<ApiResponse<Proposal[]>>(
      `${this.apiUrl}/proposals`,
      { headers: this.getHeaders() }
    ).pipe(
      catchError(this.handleError)
    );
  }

  getProposalById(id: string): Observable<ApiResponse<Proposal>> {
    return this.http.get<ApiResponse<Proposal>>(
      `${this.apiUrl}/proposals/${id}`,
      { headers: this.getHeaders() }
    ).pipe(
      catchError(this.handleError)
    );
  }

  deleteProposal(id: string): Observable<ApiResponse<null>> {
    return this.http.delete<ApiResponse<null>>(
      `${this.apiUrl}/proposals/${id}`,
      { headers: this.getHeaders() }
    ).pipe(
      catchError(this.handleError)
    );
  }
}