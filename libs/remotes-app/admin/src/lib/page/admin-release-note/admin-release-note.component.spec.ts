import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminReleaseNotePageComponent } from './admin-release-note.component';

describe('AdminReleaseNotePageComponent', () => {
  let component: AdminReleaseNotePageComponent;
  let fixture: ComponentFixture<AdminReleaseNotePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminReleaseNotePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminReleaseNotePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
