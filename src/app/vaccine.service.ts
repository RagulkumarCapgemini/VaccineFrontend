import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VaccineService {

  private baseUrl = "http://localhost:8080/vaccine"

  constructor(private http: HttpClient) { }

  allVaccine(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  addVaccine(vaccine: object): Observable<object> {
    return this.http.post(`${this.baseUrl}/add`, vaccine);
  }

  updateVaccine(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/update/${id}`, value);
  }

  deleteVaccine(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }

  getVaccineByName(vaccineName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/name/${vaccineName}`);
  }

  getVaccineById(vaccineId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/vaccineid/${vaccineId}`);
  }
}
