import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Category3UiComponent } from './category-3-ui.component';

describe('Category3UiComponent', () => {
  let component: Category3UiComponent;
  let fixture: ComponentFixture<Category3UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Category3UiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Category3UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
