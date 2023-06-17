import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Timeline3PopupComponent } from './timeline-3-popup.component';

describe('Timeline3PopupComponent', () => {
  let component: Timeline3PopupComponent;
  let fixture: ComponentFixture<Timeline3PopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Timeline3PopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Timeline3PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
