import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Blog1UiComponent } from './blog-1-ui.component';

describe('Blog1UiComponent', () => {
  let component: Blog1UiComponent;
  let fixture: ComponentFixture<Blog1UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Blog1UiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Blog1UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
