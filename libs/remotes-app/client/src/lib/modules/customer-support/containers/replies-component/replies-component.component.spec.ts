import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepliesComponentComponent } from './replies-component.component';

describe('RepliesComponentComponent', () => {
  let component: RepliesComponentComponent;
  let fixture: ComponentFixture<RepliesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepliesComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RepliesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
