import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Footer1UiComponent } from './footer-1-ui.component';

describe('Footer1UiComponent', () => {
  let component: Footer1UiComponent;
  let fixture: ComponentFixture<Footer1UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Footer1UiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer1UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
