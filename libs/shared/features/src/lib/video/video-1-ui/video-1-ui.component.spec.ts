import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Video1UiComponent } from './video-1-ui.component';

describe('Video1UiComponent', () => {
  let component: Video1UiComponent;
  let fixture: ComponentFixture<Video1UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Video1UiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Video1UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
