import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineViewComponent } from './vaccine-view.component';

describe('VaccineViewComponent', () => {
  let component: VaccineViewComponent;
  let fixture: ComponentFixture<VaccineViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccineViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
