import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCustomerSupportComponent } from './admin-customer-support.component';

describe('AdminCustomerSupportComponent', () => {
  let component: AdminCustomerSupportComponent;
  let fixture: ComponentFixture<AdminCustomerSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminCustomerSupportComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminCustomerSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
