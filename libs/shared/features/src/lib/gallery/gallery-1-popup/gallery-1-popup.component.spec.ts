import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Gallery1PopupComponent } from './gallery-1-popup.component';

describe('Gallery1PopupComponent', () => {
  let component: Gallery1PopupComponent;
  let fixture: ComponentFixture<Gallery1PopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Gallery1PopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Gallery1PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
