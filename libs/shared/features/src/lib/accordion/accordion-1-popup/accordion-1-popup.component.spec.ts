import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Accordion1PopupComponent } from './accordion-1-popup.component';

describe('Accordion1PopupComponent', () => {
  let component: Accordion1PopupComponent;
  let fixture: ComponentFixture<Accordion1PopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Accordion1PopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Accordion1PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
