import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PricingSection1PopupComponent } from './pricing-section-1-popup.component';

describe('PricingSection1PopupComponent', () => {
  let component: PricingSection1PopupComponent;
  let fixture: ComponentFixture<PricingSection1PopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PricingSection1PopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PricingSection1PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
