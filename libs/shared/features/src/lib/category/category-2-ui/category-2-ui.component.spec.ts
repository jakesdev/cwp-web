import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Category2UiComponent } from './category-2-ui.component';

describe('CategoryUi2Component', () => {
  let component: Category2UiComponent;
  let fixture: ComponentFixture<Category2UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Category2UiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Category2UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
