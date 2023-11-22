import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  
  private baseUrl = 'https://localhost:5000/api/';

  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}/employees`);
  }
}
