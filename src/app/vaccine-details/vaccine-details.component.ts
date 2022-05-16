import { Component, OnInit } from '@angular/core';
import { Vaccine } from '../vaccine';
import { Observable } from 'rxjs';
import { VaccineService } from '../vaccine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vaccine-details',
  templateUrl: './vaccine-details.component.html',
  styleUrls: ['./vaccine-details.component.css']
})
export class VaccineDetailsComponent implements OnInit {

  vaccine!: Observable<Vaccine[]>;

  constructor(private vaccineService: VaccineService, private router: Router) { }

  ngOnInit(): void {
    this.reloadDate();
  }
  reloadDate() {
    this.vaccine = this.vaccineService.allVaccine();
  }

  deleteVaccine(id: number) {
    this.vaccineService.deleteVaccine(id).subscribe(data => {
      console.log(data);
      this.reloadDate();
    },
      error => console.log(error));
  }

  getVaccineByName(vaccineName : string) {
    this.router.navigate(['find', vaccineName]);
  }

  updateVaccine(id: number) {
    this.router.navigate(['update', id]);
  }

  vaccineDetails(id: number) {
    this.router.navigate(['details', id]);
  }
}
