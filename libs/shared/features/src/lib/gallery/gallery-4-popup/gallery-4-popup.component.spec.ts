import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Gallery4PopupComponent } from './gallery-4-popup.component';

describe('Gallery4PopupComponent', () => {
  let component: Gallery4PopupComponent;
  let fixture: ComponentFixture<Gallery4PopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Gallery4PopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Gallery4PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
