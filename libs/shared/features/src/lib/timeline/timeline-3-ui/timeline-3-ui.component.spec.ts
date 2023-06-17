import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Timeline3UiComponent } from './timeline-3-ui.component';

describe('Timeline3UiComponent', () => {
  let component: Timeline3UiComponent;
  let fixture: ComponentFixture<Timeline3UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Timeline3UiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Timeline3UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
