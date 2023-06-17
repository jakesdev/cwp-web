import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Footer2UiComponent } from './footer-2-ui.component';

describe('Footer2UiComponent', () => {
  let component: Footer2UiComponent;
  let fixture: ComponentFixture<Footer2UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Footer2UiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer2UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
