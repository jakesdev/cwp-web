import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketCreationPopupComponent } from './ticket-creation-popup.component';

describe('TicketCreationPopupComponent', () => {
  let component: TicketCreationPopupComponent;
  let fixture: ComponentFixture<TicketCreationPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketCreationPopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TicketCreationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
