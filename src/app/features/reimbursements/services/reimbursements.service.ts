import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Reimbursement {
  id: number;
  title: string;
  amount: number;
  status: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReimbursementsService {

  private api = 'http://localhost:3000/reimbursements';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Reimbursement[]> {
    return this.http.get<Reimbursement[]>(this.api);
  }
}