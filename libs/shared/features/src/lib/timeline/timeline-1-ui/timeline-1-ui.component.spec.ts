import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Timeline1UiComponent } from './timeline-1-ui.component';

describe('Timeline1UiComponent', () => {
  let component: Timeline1UiComponent;
  let fixture: ComponentFixture<Timeline1UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Timeline1UiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Timeline1UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
