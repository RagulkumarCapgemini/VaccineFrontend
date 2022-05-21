import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VaccineDetailsComponent } from './vaccine-details/vaccine-details.component';
import { CreateVaccineComponent } from './create-vaccine/create-vaccine.component';
import { UpdateVaccineComponent } from './update-vaccine/update-vaccine.component';
import { VaccineViewComponent } from './vaccine-view/vaccine-view.component';
import { VaccineSearchComponent } from './vaccine-search/vaccine-search.component';

const routes: Routes = [
  { path: '', redirectTo: 'VaccineDetails', pathMatch: 'full' },
  { path: 'VaccineDetails', component: VaccineDetailsComponent},
  { path: 'viewAll', component: VaccineViewComponent},
  { path: 'add', component: CreateVaccineComponent},
  { path: 'search/:vaccineName', component: VaccineSearchComponent},
  { path: 'update/:id', component: UpdateVaccineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
