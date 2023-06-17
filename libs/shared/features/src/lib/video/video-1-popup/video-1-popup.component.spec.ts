import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Video1PopupComponent } from './video-1-popup.component';

describe('Video1PopupComponent', () => {
  let component: Video1PopupComponent;
  let fixture: ComponentFixture<Video1PopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Video1PopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Video1PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
