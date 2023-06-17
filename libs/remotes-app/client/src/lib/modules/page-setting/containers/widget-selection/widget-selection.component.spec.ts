import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetSelectionComponent } from './widget-selection.component';

describe('WidgetSelectionComponent', () => {
  let component: WidgetSelectionComponent;
  let fixture: ComponentFixture<WidgetSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WidgetSelectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WidgetSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
