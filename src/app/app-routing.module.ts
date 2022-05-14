import { Vaccine } from './vaccine';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VaccineDetailsComponent } from './vaccine-details/vaccine-details.component';
import { CreateVaccineComponent } from './create-vaccine/create-vaccine.component';
import { UpdateVaccineComponent } from './update-vaccine/update-vaccine.component';

const routes: Routes = [
  { path: '', redirectTo: 'Vaccine', pathMatch: 'full' },
  { path: 'Vaccine', component: VaccineDetailsComponent},
  { path: 'add', component: CreateVaccineComponent},
  { path: 'update/:id', component: UpdateVaccineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
