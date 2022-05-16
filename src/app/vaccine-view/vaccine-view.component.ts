import { Component, OnInit } from '@angular/core';
import { VaccineService } from '../vaccine.service';
import { Vaccine } from '../vaccine';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vaccine-view',
  templateUrl: './vaccine-view.component.html',
  styleUrls: ['./vaccine-view.component.css']
})
export class VaccineViewComponent implements OnInit {

  vaccine!: Observable<Vaccine[]>;

  constructor(private vaccineService: VaccineService, private router: Router) { }

  ngOnInit(): void {
    this.reloadDate();
  }
  reloadDate() {
    this.vaccine = this.vaccineService.allVaccine();
  }

}
