import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Category2PopupComponent } from './category-2-popup.component';

describe('Category2PopupComponent', () => {
  let component: Category2PopupComponent;
  let fixture: ComponentFixture<Category2PopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Category2PopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Category2PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
