import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageCreateDialogComponent } from './page-create-dialog.component';

describe('PageCreateDialogComponent', () => {
  let component: PageCreateDialogComponent;
  let fixture: ComponentFixture<PageCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageCreateDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
