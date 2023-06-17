import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Accordion1UiComponent } from './accordion-1-ui.component';

describe('Accordion1UiComponent', () => {
  let component: Accordion1UiComponent;
  let fixture: ComponentFixture<Accordion1UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Accordion1UiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Accordion1UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
