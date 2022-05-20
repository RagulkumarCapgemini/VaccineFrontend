import { Component, OnInit } from '@angular/core';
import { Vaccine } from '../Class/vaccine';
import { ActivatedRoute, Router } from '@angular/router';
import { VaccineService } from '../Service/vaccine.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vaccine-search',
  templateUrl: './vaccine-search.component.html',
  styleUrls: ['./vaccine-search.component.css']
})
export class VaccineSearchComponent implements OnInit {

  //vaccines!: Observable<Vaccine[]>;
  vaccineName: string = "";
  vaccine: Vaccine = new Vaccine();
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router, private vaccineService: VaccineService) { }

  ngOnInit(): void {
    this.vaccine = new Vaccine();
    this.vaccine = {
      vaccineId: 0,
      vaccineName: "",
      description: ""
    };
    this.vaccineName = this.route.snapshot.params['vaccineName'];
    this.vaccineService.getVaccineByName(this.vaccineName).subscribe(data => {
      console.log(data);
      this.vaccine = data;
    },
      error => console.log(error));
  }
  searchVaccineByName(vaccineName: string) {
    this.router.navigate(['search', vaccineName]);
  }

  searchByName() {
    this.vaccineService.getVaccineByName(this.vaccineName).subscribe(data => {
      console.log(data);
      this.vaccine = new Vaccine();
    },
      error => console.log(error));
  }

  onSubmit(searchVaccine: { value: any }) {
    this.submitted = true;
    this.searchByName();
  }
}
