import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VaccineDetailsComponent } from './vaccine-details/vaccine-details.component';
import { UpdateVaccineComponent } from './update-vaccine/update-vaccine.component';
import { CreateVaccineComponent } from './create-vaccine/create-vaccine.component';
import { VaccineViewComponent } from './vaccine-view/vaccine-view.component';
import { VaccineSearchComponent } from './vaccine-search/vaccine-search.component';

@NgModule({
  declarations: [
    AppComponent,
    VaccineDetailsComponent,
    UpdateVaccineComponent,
    CreateVaccineComponent,
    VaccineViewComponent,
    VaccineSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
