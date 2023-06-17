import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanAndBillingComponent } from './plan-and-billing.component';

describe('PlanAndBillingComponent', () => {
  let component: PlanAndBillingComponent;
  let fixture: ComponentFixture<PlanAndBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanAndBillingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlanAndBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
