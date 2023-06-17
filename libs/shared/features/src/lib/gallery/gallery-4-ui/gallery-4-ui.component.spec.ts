import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Gallery4UiComponent } from './gallery-4-ui.component';

describe('Gallery4UiComponent', () => {
  let component: Gallery4UiComponent;
  let fixture: ComponentFixture<Gallery4UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Gallery4UiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Gallery4UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
