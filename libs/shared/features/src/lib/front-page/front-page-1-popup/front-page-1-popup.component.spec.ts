import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontPage1PopupComponent } from './front-page-1-popup.component';

describe('FrontPage1PopupComponent', () => {
  let component: FrontPage1PopupComponent;
  let fixture: ComponentFixture<FrontPage1PopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrontPage1PopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontPage1PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
