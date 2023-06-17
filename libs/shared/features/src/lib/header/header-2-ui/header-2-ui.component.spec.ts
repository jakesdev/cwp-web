import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header2UiComponent } from './header-2-ui.component';

describe('Header2UiComponent', () => {
  let component: Header2UiComponent;
  let fixture: ComponentFixture<Header2UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Header2UiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Header2UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
