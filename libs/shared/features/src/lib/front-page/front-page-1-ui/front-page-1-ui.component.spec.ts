import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontPage1UiComponent } from './front-page-1-ui.component';

describe('FrontPage1UiComponent', () => {
  let component: FrontPage1UiComponent;
  let fixture: ComponentFixture<FrontPage1UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrontPage1UiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontPage1UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
