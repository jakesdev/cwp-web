import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Timeline2PopupComponent } from './timeline-2-popup.component';

describe('Timeline2PopupComponent', () => {
  let component: Timeline2PopupComponent;
  let fixture: ComponentFixture<Timeline2PopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Timeline2PopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Timeline2PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
