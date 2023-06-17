import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PricingSection1UiComponent } from './pricing-section-1-ui.component';

describe('PricingSection1UiComponent', () => {
  let component: PricingSection1UiComponent;
  let fixture: ComponentFixture<PricingSection1UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PricingSection1UiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PricingSection1UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
