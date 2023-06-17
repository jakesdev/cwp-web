import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PublishPageDialogComponent } from './publish-page-dialog.component';

describe('PublishPageDialogComponent', () => {
  let component: PublishPageDialogComponent;
  let fixture: ComponentFixture<PublishPageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublishPageDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PublishPageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
