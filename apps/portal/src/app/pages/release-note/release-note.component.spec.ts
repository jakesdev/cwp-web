import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseNotePageComponent } from './release-note.component';

describe('ReleaseNotePageComponent', () => {
  let component: ReleaseNotePageComponent;
  let fixture: ComponentFixture<ReleaseNotePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReleaseNotePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReleaseNotePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
