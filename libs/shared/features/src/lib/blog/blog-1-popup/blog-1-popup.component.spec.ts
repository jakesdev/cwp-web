import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Blog1PopupComponent } from './blog-1-popup.component';

describe('Blog1PopupComponent', () => {
  let component: Blog1PopupComponent;
  let fixture: ComponentFixture<Blog1PopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Blog1PopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Blog1PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
