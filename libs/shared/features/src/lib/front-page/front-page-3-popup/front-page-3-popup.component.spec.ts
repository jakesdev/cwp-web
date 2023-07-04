import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontPage3PopupComponent } from './front-page-3-popup.component';

describe('FrontPage3PopupComponent', () => {
  let component: FrontPage3PopupComponent;
  let fixture: ComponentFixture<FrontPage3PopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrontPage3PopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontPage3PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
