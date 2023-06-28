import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FollowDetailDialogComponent } from './follow-detail-dialog.component';

describe('FollowDetailDialogComponent', () => {
  let component: FollowDetailDialogComponent;
  let fixture: ComponentFixture<FollowDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FollowDetailDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FollowDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
