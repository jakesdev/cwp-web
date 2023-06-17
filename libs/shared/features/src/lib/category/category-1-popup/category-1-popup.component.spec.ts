import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Category1PopupComponent } from './category-1-popup.component';

describe('Category1PopupComponent', () => {
  let component: Category1PopupComponent;
  let fixture: ComponentFixture<Category1PopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Category1PopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Category1PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
