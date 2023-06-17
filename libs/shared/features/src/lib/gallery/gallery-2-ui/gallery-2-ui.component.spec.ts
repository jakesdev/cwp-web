import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Gallery2UiComponent } from './gallery-2-ui.component';

describe('Gallery2UiComponent', () => {
  let component: Gallery2UiComponent;
  let fixture: ComponentFixture<Gallery2UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Gallery2UiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Gallery2UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
