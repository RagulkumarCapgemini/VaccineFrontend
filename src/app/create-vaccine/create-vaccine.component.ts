import { Vaccine } from '../Class/vaccine';
import { Component, OnInit } from '@angular/core';
import { VaccineService } from '../Service/vaccine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-vaccine',
  templateUrl: './create-vaccine.component.html',
  styleUrls: ['./create-vaccine.component.css']
})
export class CreateVaccineComponent implements OnInit {

  vaccine: Vaccine = new Vaccine();
  submitted = false;

  constructor(private vaccineService: VaccineService, private router: Router) { }

  ngOnInit(): void {
  }

  newVaccine(): void {
    this.submitted = false;
    this.vaccine = new Vaccine();
  }

  save() {
    
    this.vaccineService.addVaccine(this.vaccine).subscribe(data => {
      console.log(data)
      this.vaccine = new Vaccine();
      this.gotoList();
    },
      error => alert("Vaccine name already exists! Please go back..."));
  }

  onSubmit(createForm: { value: any }) {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/VaccineDetails']);
  }
}
