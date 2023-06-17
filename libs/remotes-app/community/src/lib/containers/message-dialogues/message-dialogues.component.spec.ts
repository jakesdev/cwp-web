import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageDialoguesComponent } from './message-dialogues.component';

describe('MessageDialoguesComponent', () => {
  let component: MessageDialoguesComponent;
  let fixture: ComponentFixture<MessageDialoguesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessageDialoguesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MessageDialoguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
