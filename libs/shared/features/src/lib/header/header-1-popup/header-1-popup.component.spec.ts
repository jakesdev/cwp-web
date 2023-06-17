import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header1PopupComponent } from './header-1-popup.component';

describe('Header1PopupComponent', () => {
  let component: Header1PopupComponent;
  let fixture: ComponentFixture<Header1PopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Header1PopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Header1PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
