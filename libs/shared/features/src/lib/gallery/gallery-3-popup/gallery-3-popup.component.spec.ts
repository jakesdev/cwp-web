import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Gallery3PopupComponent } from './gallery-3-popup.component';

describe('Gallery3PopupComponent', () => {
  let component: Gallery3PopupComponent;
  let fixture: ComponentFixture<Gallery3PopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Gallery3PopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Gallery3PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
