import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Category3PopupComponent } from './category-3-popup.component';

describe('Category3PopupComponent', () => {
  let component: Category3PopupComponent;
  let fixture: ComponentFixture<Category3PopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Category3PopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Category3PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
