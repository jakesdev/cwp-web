import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageEditDialogComponent } from './page-edit-dialog.component';

describe('PageEditDialogComponent', () => {
  let component: PageEditDialogComponent;
  let fixture: ComponentFixture<PageEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageEditDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
