import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Timeline1PopupComponent } from './timeline-1-popup.component';

describe('Timeline1PopupComponent', () => {
  let component: Timeline1PopupComponent;
  let fixture: ComponentFixture<Timeline1PopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Timeline1PopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Timeline1PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
