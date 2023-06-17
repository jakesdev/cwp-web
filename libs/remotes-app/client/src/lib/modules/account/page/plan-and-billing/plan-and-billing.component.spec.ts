import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanAndBillingPageComponent } from './plan-and-billing.component';

describe('PlanAndBillingPageComponent', () => {
  let component: PlanAndBillingPageComponent;
  let fixture: ComponentFixture<PlanAndBillingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanAndBillingPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlanAndBillingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
