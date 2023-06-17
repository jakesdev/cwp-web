import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Gallery1UiComponent } from './gallery-1-ui.component';

describe('Gallery1UiComponent', () => {
  let component: Gallery1UiComponent;
  let fixture: ComponentFixture<Gallery1UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Gallery1UiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Gallery1UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
