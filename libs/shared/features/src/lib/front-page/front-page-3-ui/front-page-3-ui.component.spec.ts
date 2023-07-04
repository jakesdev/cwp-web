import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontPage3UiComponent } from './front-page-3-ui.component';

describe('FrontPage3UiComponent', () => {
  let component: FrontPage3UiComponent;
  let fixture: ComponentFixture<FrontPage3UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrontPage3UiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontPage3UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
