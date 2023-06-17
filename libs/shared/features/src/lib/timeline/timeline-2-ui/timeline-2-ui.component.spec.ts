import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Timeline2UiComponent } from './timeline-2-ui.component';

describe('Timeline2UiComponent', () => {
  let component: Timeline2UiComponent;
  let fixture: ComponentFixture<Timeline2UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Timeline2UiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Timeline2UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
