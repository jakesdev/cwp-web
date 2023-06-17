import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontPage2PopupComponent } from './front-page-2-popup.component';

describe('FrontPage2PopupComponent', () => {
  let component: FrontPage2PopupComponent;
  let fixture: ComponentFixture<FrontPage2PopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrontPage2PopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontPage2PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
