import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header2PopupComponent } from './header-2-popup.component';

describe('Header2PopupComponent', () => {
  let component: Header2PopupComponent;
  let fixture: ComponentFixture<Header2PopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Header2PopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Header2PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
