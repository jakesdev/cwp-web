import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Gallery2PopupComponent } from './gallery-2-popup.component';

describe('Gallery2PopupComponent', () => {
  let component: Gallery2PopupComponent;
  let fixture: ComponentFixture<Gallery2PopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Gallery2PopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Gallery2PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
