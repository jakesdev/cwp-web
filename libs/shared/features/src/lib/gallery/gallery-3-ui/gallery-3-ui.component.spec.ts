import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Gallery3UiComponent } from './gallery-3-ui.component';

describe('Gallery3UiComponent', () => {
  let component: Gallery3UiComponent;
  let fixture: ComponentFixture<Gallery3UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Gallery3UiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Gallery3UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
