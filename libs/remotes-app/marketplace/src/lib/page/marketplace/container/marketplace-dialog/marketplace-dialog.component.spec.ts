import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarketplaceDialogComponent } from './marketplace-dialog.component';

describe('MarketplaceDialogComponent', () => {
  let component: MarketplaceDialogComponent;
  let fixture: ComponentFixture<MarketplaceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarketplaceDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MarketplaceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
