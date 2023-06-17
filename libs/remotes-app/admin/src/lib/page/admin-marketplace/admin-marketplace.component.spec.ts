import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMarketplaceComponent } from './admin-marketplace.component';

describe('AdminMarketplaceComponent', () => {
  let component: AdminMarketplaceComponent;
  let fixture: ComponentFixture<AdminMarketplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminMarketplaceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
