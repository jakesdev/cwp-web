import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Footer1PopupComponent } from './footer-1-popup.component';

describe('Footer1PopupComponent', () => {
  let component: Footer1PopupComponent;
  let fixture: ComponentFixture<Footer1PopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Footer1PopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer1PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
