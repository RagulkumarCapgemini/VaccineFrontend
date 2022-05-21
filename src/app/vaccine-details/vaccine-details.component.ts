import { Component, OnInit } from '@angular/core';
import { Vaccine } from '../Class/vaccine';
import { Observable } from 'rxjs';
import { VaccineService } from '../Service/vaccine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vaccine-details',
  templateUrl: './vaccine-details.component.html',
  styleUrls: ['./vaccine-details.component.css']
})
export class VaccineDetailsComponent implements OnInit {

  vaccine: Observable<Vaccine[]>;

  constructor(private vaccineService: VaccineService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.vaccine = this.vaccineService.getAllVaccine();
  }

  deleteVaccine(id: number) {
    this.vaccineService.deleteVaccine(id).subscribe(data => {
      console.log(data);
      this.reloadData();
    },
      error => console.log(error));
  }

  searchVaccineByName(vaccineName: string) {
    this.router.navigate(['search', vaccineName]);
  }

  updateVaccine(id: number) {
    this.router.navigate(['update', id]);
  }

  vaccineDetails(id: number) {
    this.router.navigate(['details', id]);
  }
}
