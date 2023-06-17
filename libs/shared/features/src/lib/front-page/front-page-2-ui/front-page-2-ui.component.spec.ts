import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontPage2UiComponent } from './front-page-2-ui.component';

describe('FrontPage2UiComponent', () => {
  let component: FrontPage2UiComponent;
  let fixture: ComponentFixture<FrontPage2UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrontPage2UiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontPage2UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
