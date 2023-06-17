import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header1UiComponent } from './header-1-ui.component';

describe('Header1UiComponent', () => {
  let component: Header1UiComponent;
  let fixture: ComponentFixture<Header1UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Header1UiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Header1UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
