import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vaccine } from './vaccine';

@Injectable({
  providedIn: 'root'
})
export class VaccineService {

  private baseUrl = "http://localhost:8080/api/admin"

  constructor(private http: HttpClient) { }

  getAllVaccine(): Observable<any> {
    return this.http.get(`${this.baseUrl}/vaccine`);
  }

  addVaccine(vaccine: object): Observable<object> {
    return this.http.post(`${this.baseUrl}/vaccine/add`, vaccine);
  }

  updateVaccine(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/id/vaccine/update/${id}`, value);
  }

  deleteVaccine(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/vaccine/delete/${id}`, { responseType: 'text' });
  }

  getVaccineById(vaccineId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/vaccines/${vaccineId}`);
  }
}
