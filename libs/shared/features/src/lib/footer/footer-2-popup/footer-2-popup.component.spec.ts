import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Footer2PopupComponent } from './footer-2-popup.component';

describe('Footer2PopupComponent', () => {
  let component: Footer2PopupComponent;
  let fixture: ComponentFixture<Footer2PopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Footer2PopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer2PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
